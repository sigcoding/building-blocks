# Building Blocks

In this monorepo will be listed all of Sig's building blocks.

## How to create a new building block
To create a new building block, you need to create a specific branch for each one of them.

Example: `block/email` is the branch that will wrap all of the code of the Email Sending Block (ESB)
* The blocks will be nominated according to its abbreviation.

## How to contribute
To contribute with a new building block you need to **fork** the repository and create your code and then create a new pull request which will be reviewed by the team and if satisfies our quality and architecure, the branch will be merged into `main`.

## Default stack
The building blocks must be created using TypeScript, [Koa](https://koajs.com/) and [ApiWithLog](https://github.com/entria/apiWithLog) 
