import axios from 'axios'
import * as fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const prompt = process.argv.slice(2).join(' ')
if (!prompt) {
  console.error('Please provide a test description.')
  process.exit(1)
}

async function generateTest() {
  try {
    const res = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions', // Groq-compatible endpoint
      {
        model: 'gemma2-9b-it', // or llama3
        messages: [
          {
            role: 'system',
            content: 'You are a QA automation engineer writing Playwright test scripts in TypeScript.',
          },
          {
            role: 'user',
            content: `Write a Playwright test for: "${prompt}"`,
          },
        ],
        temperature: 0.3,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const testCode = res.data.choices[0].message.content
    const fileName = `tests/generated-${Date.now()}.spec.ts`
    fs.writeFileSync(fileName, testCode)
    console.log(`✅ Test saved to ${fileName}`)
  } catch (err: any) {
    console.error('❌ Error generating test:', err.response?.data || err.message)
  }
}

generateTest()
// .catch((err) => {
//   console.error('❌ Error:', err.message)