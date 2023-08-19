const dotenv = require("dotenv-safe");

dotenv.config();

const accountSid: string = process.env.ACCOUNT_SID as string;
const authToken = process.env.AUTH_TOKEN as string;

const run = async () => {
  const Bard = await import("bard-ai");
  const client = require("twilio")(accountSid, authToken);

  await Bard.init(process.env.BARD_COOKIE_KEY as string);

  const response = await Bard.askAI(
    "quais são os contatos na cidade de guanambi?"
  );

  client.messages
    .create({
      body: response,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+5577920008409",
    })
    .then((message: any) => console.log(message.sid));
};

(async () => {
  try {
    await run();
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
})();
