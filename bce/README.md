# Bard Completion Engine (BCE)

BCE is a block develped by Sig to integrate with [Google Bard](https://bard.google.com) using [bard-api](https://www.npmjs.com/package/bard-ai).

## How to configure

To configure BCE, you need to login with your Google account at [Google Bard](https://bard.google.com). Once you are logged in, open the webpage's console and insert the following command:

```js
document.cookie
  .split(" ")
  .filter((p) => p.trim().startsWith("__Secure-1PAPISID"))[0]
  .split("=")[1]
  .replace(";", "");
```

After running the command, you may see your COOKIE_KEY at the console, it should look like: `ZQjYwPMdnCZepx7tBW0Nf8MxLKeQNOUujfN6Xa70JeIAynQpc5FEXlvkxjmpSTkU5DrQAw.`

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

`BARD_COOKIE_KEY` is the key you saw at your web console.
