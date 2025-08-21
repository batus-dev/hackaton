"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const client_bedrock_agent_runtime_1 = require("@aws-sdk/client-bedrock-agent-runtime");
// Configuración
const KNOWLEDGE_BASE_MAX_RESULTS = parseInt(process.env.KNOWLEDGE_BASE_MAX_RESULTS || '10');
const KNOWLEDGE_BASE_ID = process.env.KNOWLEDGE_BASE_ID || '';
// Cliente de Bedrock
const clientBedrockAgentRuntime = new client_bedrock_agent_runtime_1.BedrockAgentRuntimeClient({
    region: 'us-west-2'
});
/**
 * Función para realizar retrieval en Bedrock Knowledge Base
 */
async function newRetrieveApi(query, numberOfResults = KNOWLEDGE_BASE_MAX_RESULTS) {
    const params = {
        knowledgeBaseId: KNOWLEDGE_BASE_ID,
        retrievalQuery: {
            text: query
        },
        retrievalConfiguration: {
            vectorSearchConfiguration: {
                overrideSearchType: client_bedrock_agent_runtime_1.SearchType.HYBRID,
                numberOfResults: numberOfResults
            }
        }
    };
    const command = new client_bedrock_agent_runtime_1.RetrieveCommand(params);
    return await clientBedrockAgentRuntime.send(command);
}
/**
 * Handler principal de Lambda
 */
const handler = async (event) => {
    console.log('Event:', JSON.stringify(event, null, 2));
    // Headers CORS
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
    };
    try {
        // Manejar preflight OPTIONS request
        if (event.httpMethod === 'OPTIONS') {
            return {
                statusCode: 200,
                headers,
                body: ''
            };
        }
        // Validar método HTTP
        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                headers,
                body: JSON.stringify({
                    error: 'Method not allowed',
                    message: 'Only POST method is supported'
                })
            };
        }
        // Parsear body
        if (!event.body) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    error: 'Bad request',
                    message: 'Request body is required'
                })
            };
        }
        let requestBody;
        try {
            requestBody = JSON.parse(event.body);
        }
        catch (parseError) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    error: 'Bad request',
                    message: 'Invalid JSON in request body'
                })
            };
        }
        // Validar parámetros requeridos
        const { query, numberOfResults } = requestBody;
        if (!query || typeof query !== 'string') {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    error: 'Bad request',
                    message: 'Query parameter is required and must be a string'
                })
            };
        }
        // Validar numberOfResults si se proporciona
        const resultsCount = numberOfResults ? parseInt(numberOfResults) : KNOWLEDGE_BASE_MAX_RESULTS;
        if (isNaN(resultsCount) || resultsCount < 1 || resultsCount > 100) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    error: 'Bad request',
                    message: 'numberOfResults must be a number between 1 and 100'
                })
            };
        }
        // Realizar la consulta a Bedrock
        console.log(`Performing retrieval for query: "${query}" with ${resultsCount} results`);
        const result = await newRetrieveApi(query, resultsCount);
        console.log('Bedrock response:', JSON.stringify(result, null, 2));
        // Formatear respuesta
        const response = {
            success: true,
            query: query,
            numberOfResults: resultsCount,
            retrievalResults: result.retrievalResults || [],
            metadata: {
                knowledgeBaseId: KNOWLEDGE_BASE_ID,
                timestamp: new Date().toISOString()
            }
        };
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(response)
        };
    }
    catch (error) {
        console.error('Error in Lambda handler:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Internal server error',
                message: 'An error occurred while processing your request',
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            })
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=index.js.map