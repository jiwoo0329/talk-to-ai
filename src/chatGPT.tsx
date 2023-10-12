import { OpenAI } from "openai";

export default function chatGpt(
  req: string,
  setAnswer: React.Dispatch<React.SetStateAction<string>>
) {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req }],
      temperature: 0,
      max_tokens: 100,
    })
    .then((res) => {
      if (res.choices[0].message.content !== null) {
        setAnswer(res.choices[0].message.content);
      }
    })
    .catch((err) => {
      alert(`err발생: ${err}`);
    });
}
