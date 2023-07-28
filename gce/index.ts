import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv-safe";

dotenv.config();

const run = async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "hey! how are you?",
      },
    ],
  });

  console.log(chatCompletion.data.choices[0].message);
};

(async function () {
  try {
    run();
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
})();
