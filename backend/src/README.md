# Sorprendeme - Bedrock Knowledge Base API

API Gateway + Lambda para consultar la Knowledge Base de Bedrock del proyecto Sorprendeme.

## 🏗️ Arquitectura

```
API Gateway → Lambda (Node.js) → Bedrock Knowledge Base (IKEMUOEQKP)
```

## 📋 Prerrequisitos

1. **AWS CLI** configurado con credenciales
2. **SAM CLI** instalado
3. **Node.js 18+** y npm
4. Permisos para acceder a Bedrock en la región `us-west-2`

## 🚀 Despliegue Rápido

```bash
# Ejecutar script de despliegue
./deploy.sh
```

## 🔧 Despliegue Manual

### 1. Instalar dependencias
```bash
cd lambda
npm install
npm run build
cd ..
```

### 2. Construir con SAM
```bash
sam build
```

### 3. Desplegar
```bash
sam deploy \
    --stack-name sorprendeme-bedrock-api \
    --region us-west-2 \
    --capabilities CAPABILITY_IAM \
    --guided  # Solo la primera vez
```

## 📡 Uso de la API

### Endpoint
```
POST https://{api-id}.execute-api.us-west-2.amazonaws.com/prod/retrieve
```

### Request Body
```json
{
  "query": "películas de comedia romántica",
  "numberOfResults": 5  // Opcional, default: 10
}
```

### Response
```json
{
  "success": true,
  "query": "películas de comedia romántica",
  "numberOfResults": 5,
  "retrievalResults": [
    {
      "content": {
        "text": "..."
      },
      "location": {
        "type": "S3",
        "s3Location": {
          "uri": "s3://..."
        }
      },
      "score": 0.85
    }
  ],
  "metadata": {
    "knowledgeBaseId": "IKEMUOEQKP",
    "timestamp": "2024-08-21T19:12:00.000Z"
  }
}
```

## 🧪 Pruebas

### Con curl
```bash
curl -X POST https://your-api-url/prod/retrieve \
  -H 'Content-Type: application/json' \
  -d '{
    "query": "películas de terror psicológico",
    "numberOfResults": 3
  }'
```

### Con JavaScript/Fetch
```javascript
const response = await fetch('https://your-api-url/prod/retrieve', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'películas para sentirse feliz',
    numberOfResults: 5
  })
});

const data = await response.json();
console.log(data);
```

## 🔍 Monitoreo

### CloudWatch Logs
```bash
# Ver logs de Lambda
aws logs tail /aws/lambda/sorprendeme-bedrock-api-BedrockRetrievalFunction --follow
```

### Métricas
- **Invocaciones**: Número de llamadas a la API
- **Duración**: Tiempo de respuesta
- **Errores**: Tasa de error 4xx/5xx
- **Throttles**: Limitaciones de concurrencia

## 🛠️ Configuración

### Variables de Entorno
- `KNOWLEDGE_BASE_ID`: ID de la Knowledge Base (IKEMUOEQKP)
- `KNOWLEDGE_BASE_MAX_RESULTS`: Número máximo de resultados (10)

### Permisos IAM
La Lambda necesita permisos para:
- `bedrock:Retrieve`
- `bedrock:RetrieveAndGenerate`

## 🗑️ Limpieza

Para eliminar todos los recursos:
```bash
aws cloudformation delete-stack \
    --stack-name sorprendeme-bedrock-api \
    --region us-west-2
```

## 🐛 Troubleshooting

### Error: Access Denied
- Verificar permisos IAM para Bedrock
- Confirmar que la Knowledge Base existe en us-west-2

### Error: Invalid JSON
- Verificar formato del request body
- Asegurar Content-Type: application/json

### Timeout
- Aumentar timeout en template.yaml
- Verificar conectividad con Bedrock

## 📊 Integración con Frontend

Para integrar con el frontend de Sorprendeme:

```javascript
// services/bedrockApi.js
export const searchContent = async (emotionalQuery, maxResults = 10) => {
  try {
    const response = await fetch(process.env.REACT_APP_BEDROCK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: emotionalQuery,
        numberOfResults: maxResults
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching content:', error);
    throw error;
  }
};
```
