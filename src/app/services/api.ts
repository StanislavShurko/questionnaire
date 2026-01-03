import { OpenRouter } from "@openrouter/sdk";

const apiKey = process.env.NEXT_PUBLIC_AI_API_KEY;

const openRouter = new OpenRouter({
  apiKey: apiKey,
});

export const getQuestions = async (topic: string) => {
  const completion = await openRouter.chat.send({
    model: "xiaomi/mimo-v2-flash:free",
    messages: [
      {
        role: "system",
        content: `
          You are a quiz generator.

          Return EXACTLY an array of 10 objects in valid JSON.
          Each object must have:
          - question (string)
          - answers (array of exactly 4 strings)
          - correct (string, must match one of the answers)

          Array of answers must be shuffled randomly.
          NO markdown.
          NO explanations.
          ONLY valid JSON.
        `.trim(),
      },
      {
        role: "user",
        content: `Generate quiz questions about ${topic}.`,
      },
    ],
    stream: false,
  });

  const raw = completion.choices[0].message.content;
  const questions = JSON.parse(raw as string);
  return questions;
};
