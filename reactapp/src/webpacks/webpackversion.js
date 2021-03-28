// We are using webpack v4

//npm install --save-dev webpack@4

// Webpack is basically a bundler which concatenates the files and optimizes the files
// and hook in various plugins to transfrom the files eg: Transpile the next generation JS to current 
// generarttion JS

// Webpack basically combines JS files , css files into their bundles and then opyimises everything

// How it works
// 1 . It needs an entry point in the application generally app.js where the application is mounted to DOM. so webpack
// creates an entry point by analysing the dependiences from the root file

// 2. It then bundles all the dependecies as bundle.js in the dist folder which is correctly ordered as per 
//the depency graph

// 3. In between these 2 steps there are 2 important functionalities loaders. Loaders execute on per fie basis
// Loaders perform file dependent transformation Eg: Babel-loaders and css-loaders.

// then we have plugins which work on the concatenated files but before we write them to o/p

