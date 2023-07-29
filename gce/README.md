# GPT-3.5-turbo Completion Engine (GCE)

GCE is a block develped by Sig to integrate with ChatGPT using [Openai](https://www.npmjs.com/package/openai).

## How to configure

To configure GCE, you need to create a developer account at Openai and set-up an API key. Once your API key is created, run one of the following commands:

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
