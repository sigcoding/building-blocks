import React from "react";

interface IEmailTemplateProps {
  targetEmail: string;
}

export default function EmailTemplate({ targetEmail }: IEmailTemplateProps) {
  return <h1>email template works!</h1>;
}
