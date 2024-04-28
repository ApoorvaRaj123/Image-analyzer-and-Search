# Build and Deploy Unified Conversational Agent with Text and Image Search(UCATI): Next.js 14, React, Uploadthing, RapidApi,Tailwind


This is a repository for Build and Deploy UCATI: Next.js 14, React, Uploadthing, RapidApi,Tailwind

Under the Supervisor :- 
Dr. Rajneesh Kumar Patel


Key Features:

- 🔍 Google search (All Section).
- 🎥 Videos search.
- 📤 Images upload using uploadthing.
- 🌏 Search image using Google Lens Api.
- 📤🔗Search image by uploading images and retrieving image url.
- 🔗 Search image using your own image url.
- </> Display description using HTML-React-Parser.
- 🔮 Web theme using Next-themes

### Prerequisites

**Node version 18.17 or later**

### Fill in API keys

**DuckDuck**

```js
 headers: {
     // you api key here
     "X-RapidAPI-Key": "",
     "X-RapidAPI-Host": "duckduckgo10.p.rapidapi.com",
   }
```

**Google Lens API**

```js
  headers: {
      // fill in API key her
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "google-lens-image-search1.p.rapidapi.com",
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
GogleLensKey=
DuckDuckKey=
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
