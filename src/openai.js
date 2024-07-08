// src/openai.js
import axios from 'axios';

const openaiApiKey = "sk-proj-KnH3nC7dmPWlf4i7qLyuT3BlbkFJsaGqfBDPRfCQDzvbL4FY";

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/',
  headers: {
    Authorization: `Bearer ${openaiApiKey}`,
    'Content-Type': 'application/json',
  },
});

export const sendMsgToOpenAI = async (message) => {
  try {
    const response = await openai.post('completions', {
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 150, 
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error sending message to OpenAI:', error);
    return null;
  }
};


