// Script de prueba para la API de Bedrock
// Ejecutar con: node test-api.js

const API_URL = 'https://your-api-url-here.execute-api.us-west-2.amazonaws.com/prod/retrieve';

async function testBedrockAPI() {
  const testCases = [
    {
      name: 'Búsqueda emocional - Felicidad',
      query: 'películas que me hagan sentir feliz y optimista',
      numberOfResults: 5
    },
    {
      name: 'Búsqueda emocional - Nostalgia',
      query: 'contenido nostálgico y emotivo para recordar',
      numberOfResults: 3
    },
    {
      name: 'Búsqueda por género',
      query: 'películas de terror psicológico',
      numberOfResults: 4
    },
    {
      name: 'Búsqueda contextual',
      query: 'algo relajante para ver en domingo por la tarde',
      numberOfResults: 6
    }
  ];

  console.log('🧪 Iniciando pruebas de la API de Bedrock Knowledge Base\n');

  for (const testCase of testCases) {
    console.log(`📝 Prueba: ${testCase.name}`);
    console.log(`🔍 Query: "${testCase.query}"`);
    
    try {
      const startTime = Date.now();
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: testCase.query,
          numberOfResults: testCase.numberOfResults
        })
      });

      const endTime = Date.now();
      const duration = endTime - startTime;

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      console.log(`✅ Éxito (${duration}ms)`);
      console.log(`📊 Resultados encontrados: ${data.retrievalResults?.length || 0}`);
      
      if (data.retrievalResults && data.retrievalResults.length > 0) {
        console.log(`🎯 Primer resultado (score: ${data.retrievalResults[0].score}):`);
        console.log(`   ${data.retrievalResults[0].content.text.substring(0, 100)}...`);
      }
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
    }
    
    console.log('─'.repeat(60));
  }

  console.log('\n🏁 Pruebas completadas');
}

// Ejecutar pruebas
if (require.main === module) {
  if (API_URL.includes('your-api-url-here')) {
    console.log('❌ Error: Actualiza la variable API_URL con tu endpoint real');
    process.exit(1);
  }
  
  testBedrockAPI().catch(console.error);
}

module.exports = { testBedrockAPI };
