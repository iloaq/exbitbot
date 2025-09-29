// Скрипт для тестирования API
const fetch = require('node-fetch');

async function testAPI() {
  const baseUrl = 'http://localhost:3000';
  
  console.log('🧪 Тестирование API...\n');
  
  // Тест 1: GET /api/test
  try {
    console.log('1️⃣ Тестируем GET /api/test...');
    const response = await fetch(`${baseUrl}/api/test`);
    const data = await response.json();
    console.log('✅ GET /api/test:', data);
  } catch (error) {
    console.log('❌ GET /api/test failed:', error.message);
  }
  
  // Тест 2: POST /api/test
  try {
    console.log('\n2️⃣ Тестируем POST /api/test...');
    const response = await fetch(`${baseUrl}/api/test`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log('✅ POST /api/test:', data);
  } catch (error) {
    console.log('❌ POST /api/test failed:', error.message);
  }
  
  // Тест 3: POST /api/send-telegram (без токена)
  try {
    console.log('\n3️⃣ Тестируем POST /api/send-telegram...');
    const response = await fetch(`${baseUrl}/api/send-telegram`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        phone: '+1234567890',
        telegram: 'testuser'
      })
    });
    const data = await response.json();
    console.log('✅ POST /api/send-telegram:', data);
  } catch (error) {
    console.log('❌ POST /api/send-telegram failed:', error.message);
  }
  
  console.log('\n🏁 Тестирование завершено!');
}

testAPI();
