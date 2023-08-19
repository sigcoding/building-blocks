# Whatsapp Messaging Engine + IA (Bard) (WME-ai)

WME-ai is a block develped by Sig to integrate with [Google Bard](https://bard.google.com) using [bard-api](https://www.npmjs.com/package/bard-ai) and send programmed WhatsApp messages using [Twilio](https://console.twilio.com).

## How to configure

### Configuring Bard

To configure Google Bard, you should take a look at BCE configuration [here]()

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

`OPENAI_API_KEY` is the API KEY you received from OpenAI.
