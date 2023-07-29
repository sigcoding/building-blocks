const dotenv = require("dotenv-safe");

dotenv.config();

const run = async () => {
  const Bard = await import("bard-ai");

  console.log(process.env.BARD_COOKIE_KEY);

  await Bard.init(process.env.BARD_COOKIE_KEY as string);

  const response = await Bard.askAI("hey, who are you?");

  console.log(response);
};

(async () => {
  try {
    await run();
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
})();
