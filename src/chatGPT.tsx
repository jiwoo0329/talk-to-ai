import { OpenAI } from "openai";

export default async function chatGpt(req: string) {

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: req }],
    temperature: 0,
    max_tokens: 100,
  });

  console.log(chatCompletion.choices) ;
}
