# Email Sender Block (ESB)

ESB is a block develped by Sig to send e-mails using [React](https://react.dev/) and [Resend](https://resend.com/).

## How to configure

To configure ESB, you need to create an account at Resend and create an API key. Once your API key is created, run one of the following commands:

### 1. Using the command `cp` (Linux, macOS, e Windows com Git Bash)

```bash
cp .env.example .env
```

### 2. Using the command `copy` (Windows CMD or PowerShell)

```bash
copy .env.example .env
```

After running the command, you may see that a file called `.env` is now created.

Enter inside of the `.env` file and replace its variables to your email credentials.

`ORIGIN_EMAIL` is the email address where the emails are going to be sent from.

`ORIGIN_NAME` is the name of the owner of your `ORIGIN_EMAIL`

## How to use
