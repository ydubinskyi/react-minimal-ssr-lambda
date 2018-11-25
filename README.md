# Minimal React SSR example with AWS Lambda

Simple example of react app rendered by lambda.

## Getting Started

Install serverless framework globally

```bash
npm i -g serverless
```

Install dependencies

```bash
npm i
```

Build packages

```bash
npm run build
```

Config AWS credentials

```bash
serverless config credentials --provider aws --key KEY_EXAMPLE --secret SECRET_EXAMPLE
```

Offline debug

```bash
npm run lambda:offline
```

Deploy lambda

```bash
npm run lambda:deploy
```

## Usefull links

- [Serverless](https://serverless.com/framework/docs/getting-started/) - Getting Started with Serverless
