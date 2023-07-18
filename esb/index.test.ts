import { Resend } from "resend";
import * as dotenv from "dotenv-safe";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const originEmail = process.env.ORIGIN_EMAIL;

it("Should send yourself a test email", () => {
  (async function () {
    try {
      const data = await resend.emails.send({
        from: `Jest <${originEmail}>`,
        to: [originEmail ? originEmail : ""],
        subject: "Your test works!",
        html: "tested!!",
      });

      expect(data.id).toBeDefined();
    } catch (error) {
      console.error(error);
    }
  })();
});
