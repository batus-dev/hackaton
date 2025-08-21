#!/bin/bash

# Script de despliegue para Sorprendeme Bedrock API
set -e

echo "🚀 Iniciando despliegue de Sorprendeme Bedrock API..."

# Verificar que AWS CLI esté configurado
if ! aws sts get-caller-identity > /dev/null 2>&1; then
    echo "❌ Error: AWS CLI no está configurado correctamente"
    echo "Por favor ejecuta: aws configure"
    exit 1
fi

# Verificar que SAM CLI esté instalado
if ! command -v sam &> /dev/null; then
    echo "❌ Error: SAM CLI no está instalado"
    echo "Instala SAM CLI: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html"
    exit 1
fi

# Navegar al directorio de Lambda
cd lambda

echo "📦 Instalando dependencias..."
npm install

echo "🔨 Compilando TypeScript..."
npm run build

# Volver al directorio raíz
cd ..

echo "🏗️ Construyendo aplicación SAM..."
sam build

echo "🚀 Desplegando a AWS..."
sam deploy \
    --stack-name sorprendeme-bedrock-api \
    --region us-west-2 \
    --capabilities CAPABILITY_IAM \
    --no-confirm-changeset \
    --no-fail-on-empty-changeset

echo "✅ Despliegue completado!"

# Obtener la URL del API
API_URL=$(aws cloudformation describe-stacks \
    --stack-name sorprendeme-bedrock-api \
    --region us-west-2 \
    --query 'Stacks[0].Outputs[?OutputKey==`BedrockRetrievalApi`].OutputValue' \
    --output text)

echo ""
echo "🌐 API URL: $API_URL"
echo ""
echo "📝 Ejemplo de uso:"
echo "curl -X POST $API_URL \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -d '{\"query\": \"películas de comedia\", \"numberOfResults\": 5}'"
echo ""
