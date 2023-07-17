import { Resend } from "resend";
import * as dotenv from "dotenv-safe";
import EmailTemplate from "./templates/Template";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY as string);

const originEmail: string = process.env.ORIGIN_EMAIL as string;
const originName: string = process.env.ORIGIN_NAME as string;
const targetEmail: string = "igorducca@gmail.com";

(async function () {
  try {
    const data = await resend.emails.send({
      from: `${originName} <${originEmail}>`,
      to: [targetEmail],
      subject: "Hello World",
      react: EmailTemplate({ targetEmail }),
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
