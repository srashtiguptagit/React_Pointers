// Basic Workflow requirements

//1. Compile the next generartion JS
//2. Handle JSX
//3. Css prefixing
//4. Support image imports
//5. Optimize the code.

// Start creating react application using webpack

// 1. We need to keep a blank folder and run npm init in the terminal once we do this we see package.json file generated.
// 2. Then we need to install 2 dependencies npm install --save-dev webpack webpack-dev-server => This command
// creates an entry of devDependencies in our package.json file

//3. Creating the folder structure
// Create src folder and inside that create a new file called index.html, index.css and index.js

//index,js

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const app = (
    <BrowserRouter>
    <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// index.html
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>Documents</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>

//4. inside src folder=> assets folder and components and container folder



