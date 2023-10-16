import { OpenAI } from "openai";
import type { answerType } from "types/answer";

export default function chatGpt(
  req: string,
  setAnswer: React.Dispatch<React.SetStateAction<answerType>>
) {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `The assistant's job is to recommend color codes that match what user's describing. Response JSONArray like ["","",...]. reasonForRecommendation to be in korean. Return only JSON Array. Remove pre-text and post-text.`,
        },
        { role: "system", content: "DESC::맛있는 딸기" },
        {
          role: "assistant",
          content:
            '{"reasonForRecommendation":"..","colorlist":["#000000","#000000","#000000","#000000","#000000"]}',
        },
        { role: "user", content: "DESC::우거진 숲속의 소나무" },
        {
          role: "assistant",
          content:
            '{"reasonForRecommendation":"...","colorlist":["#000000","#000000","#000000","#000000","#000000"]}',
        },
        { role: "user", content: "DESC::드넓은 사막의 모래" },
        {
          role: "assistant",
          content:
            '{"reasonForRecommendation":"....","colorlist":["#000000","#000000","#000000","#000000","#000000"]}',
        },
        { role: "user", content: req },
      ],
      //   messages: [{ role: "user", content: req }],
      temperature: 0,
      max_tokens: 100,
    })
    .then((res) => {
      if (res.choices[0].message.content !== null) {
        setAnswer(JSON.parse(res.choices[0].message.content));
      }
    })
    .catch((err) => {
      alert(`err발생: ${err}`);
    });
}
