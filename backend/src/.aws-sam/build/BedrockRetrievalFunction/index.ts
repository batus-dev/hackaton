import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { 
  BedrockAgentRuntimeClient, 
  RetrieveCommand,
  KnowledgeBaseRetrievalConfiguration,
  SearchType
} from '@aws-sdk/client-bedrock-agent-runtime';

// Configuración
const KNOWLEDGE_BASE_MAX_RESULTS = parseInt(process.env.KNOWLEDGE_BASE_MAX_RESULTS || '10');
const KNOWLEDGE_BASE_ID = process.env.KNOWLEDGE_BASE_ID || '';

// Cliente de Bedrock
const clientBedrockAgentRuntime = new BedrockAgentRuntimeClient({
  region: 'us-west-2'
});

/**
 * Función para realizar retrieval en Bedrock Knowledge Base
 */
async function newRetrieveApi(query: string, numberOfResults: number = KNOWLEDGE_BASE_MAX_RESULTS): Promise<any> {
  const params = {
    knowledgeBaseId: KNOWLEDGE_BASE_ID,
    retrievalQuery: {
      text: query
    },
    retrievalConfiguration: {
      vectorSearchConfiguration: {
        overrideSearchType: SearchType.HYBRID,
        numberOfResults: numberOfResults
      }
    } as KnowledgeBaseRetrievalConfiguration
  };

  const command = new RetrieveCommand(params);
  return await clientBedrockAgentRuntime.send(command);
}

/**
 * Handler principal de Lambda
 */
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
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
    } catch (parseError) {
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

    // Parsear y extraer solo el contenido de text
    const parsedResults = (result.retrievalResults || []).map((retrievalResult: any) => {
      try {
        return JSON.parse(retrievalResult.content.text);
      } catch (parseError) {
        console.error('Error parsing JSON from retrievalResult:', parseError);
        console.error('Content that failed to parse:', retrievalResult.content.text);
        return null;
      }
    }).filter((result: any) => result !== null);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(parsedResults)
    };

  } catch (error) {
    console.error('Error in Lambda handler:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'An error occurred while processing your request',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      })
    };
  }
};
