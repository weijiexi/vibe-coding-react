# ReactApp with Vite

## Manual building a web app with Vite

This repo was building by [Vite](https://vitejs.dev/guide/) + [React](https://stackblitz.com/edit/vitejs-vite-5hwepw?file=index.html&terminal=dev).

###  A. Start Vite to render webpage

- Install vite 

```
npm install -D vite
```

- set index.html

src/index.html

```html
<p>Hello Vite!</p>
```

-   project structure

```
/vite-app-js
├── index.html 
├── .gitignore 
├── package-lock.json 
├── package.json 
└── Readme.md
```

- Then run the vite CLI in your terminal:

```
npx vite 
```

###  B. Start Vite to render react

structure

```
/vite-react-js
├── src 
│  ├── components
│  │   └── App.jsx
│  ├── index.html 
│  └── index.jsx
├── .gitignore 
├── package.json 
└── Readme.md
```

prepare the initial file: `index.html`, `src/index.jsx`, `src/components/App.jsx`:

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Bitter&display=swap" rel="stylesheet">
    <script type="module" src="src/index.jsx" defer></script>
    <title>React Router 6</title>
</head>
<body>
<div id="root"></div>
<!--    <script type="module" src="/src/index.jsx"></script>-->
</body>
</html>
```

-   `src/index.jsx`

```js
import React from 'react';
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />);
```

-   `src/components/App.jsx`

```js
import React from 'react';

export const  App =() => {
    return (<>
        <h1>Hello world!</h1>
    </>);
};
```

- install react react-dom

```
npm i --save react react-dom  
```

- Add `"start"` scripts to the `package.json` file  

```
  "scripts": {
    "dev": "vite", 
    "build": "vite build", 
    "preview": "vite preview" 
  },
```

- run react

```sh
npm run dev
```

or

```sh
npx vite 
```

### `.gitignore`

- `.gitignore`

```
npx gitignore node
```

## Running this project

This project is set up with [Vite](https://vitejs.dev/) and [React](https://react.dev/), a npm package
that compiles our frontend assets and comes with an integrated development server.

The dev server runs on port `5173` by default, but will use another if `5173` is
being used by another application.

- Clone the repo.
- Navigate into the project folder.
- Run `npm i` to download the project's dependencies listed in the `package.json`.
- Run `npm run dev` to compile the React project and spin up the app on `http://localhost:5173`.

