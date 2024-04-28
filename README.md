# Build Unified Conversational Agent with Text and Image Search (UCATI): Next.js 14, React, Uploadthing, OpenAI, Tailwind, React librarys


This is a repository for Build UCATI: Next.js 14, React, Uploadthing, GPTtarbo, Tailwind 

Under the Supervisor of **Dr. Rajneesh Kumar Patel (Assistant Professor, School of Computing Science and Engineering, VIT Bhopal)**
And Developed By Aayush kachhwaha and Apoorva Raj as Finel year project. 


Key Features of the project:

- 📤 Images upload using uploadthing.
- 🌏 Search image using GPT Api.
- 📤🔗Search image by uploading images and retrieving image url.
- </> Display description using HTML-React-Parser.
- 🔮 Web theme using Next-themes

### Prerequisites

**Node version 18.17 or later**

### Fill in API keys

**Open AI**

```js
 headers: {
     // you api key here
     "OPENAI_API_KEY ": " www.openai.com",
   }
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
// From Uploading Thing docs

// or fill in Rapid api keys here
OPENAI_API_KEY =
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
