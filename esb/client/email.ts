import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";

export type SendEmailProps = {
  from: string;
  to: string;
  subject: string;
  react?: JSX.Element;
  text: string;
};

export class SigEmail {
  private resend: Resend;

  constructor(resendKey: string, private originEmail: string) {
    this.resend = new Resend(resendKey);
  }

  public async sendEmail({ from, to, subject, react, text }: SendEmailProps) {
    let emailOptions: CreateEmailOptions = {
      from,
      to,
      subject,
      react,
      text,
    };

    const data = await this.resend.emails.send(emailOptions);
    return data;
  }
}
