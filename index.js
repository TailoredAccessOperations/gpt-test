const OpenAI = require('openai');

// Initialize OpenAI with your API key and base URL
const openai = new OpenAI({
  apiKey: "pk-SZelhUAQNXUUZvpsHZeFDdsNeyYyRGTruMcVBwhIVghLFsqo",
  baseURL: "http://35.243.199.104:3040/v1",
});

async function getChatCompletion() {
  try {
    // Create a chat completion
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'pai-001',
    });

    // Print the result
    console.log(chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error('Error fetching chat completion:', error);
  }
}

// Run the function
getChatCompletion();
