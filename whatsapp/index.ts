import twilio from "twilio";
import dotenv from "dotenv-safe";

dotenv.config();

const accountSid: string = process.env.ACCOUNT_SID as string;
const authToken = process.env.AUTH_TOKEN as string;

const run = async () => {
  const client: twilio.Twilio = twilio(accountSid, authToken);

  client.messages
    .create({
      body: "Your appointment is coming up on July 21 at 3PM",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+5577920008409",
    })
    .then((message) => console.log(message.sid));
};

(async function () {
  try {
    run();
  } catch (error) {
    console.error(error);
  }
})();
