## Check if Node.js is working:

Check if node works:

In terminal: `node testnode.js`

### Save-Dev flag explained:

`npm install [package_name] --save`  is used to save the package required for the application to run.

`npm install [package_name] --save-dev` is used to save the package for development purpose. Example: unit tests, minification..

**Explanation 1:** [Short StackOverflow Answer](https://stackoverflow.com/questions/22891211/what-is-the-difference-between-save-and-save-dev)

**Explanation 2:** [Long StackOverflow Answer](https://stackoverflow.com/questions/33504641/whats-the-difference-between-save-and-save-dev-in-npm-install/33507291)

**Relevant note 1:** Chris Hawkes - Getting Started With React, Babel and Webpack in 2017: [4:21](https://www.youtube.com/watch?v=w5TupxbnnrM&t=261s) - [7:06](https://www.youtube.com/watch?v=w5TupxbnnrM&t=426s)

**Relevant note 2:** [Question](https://github.com/Microsoft/types-publisher/issues/81) - [Answer](https://github.com/Microsoft/types-publisher/issues/81#issuecomment-234051338)

## Run App:

1. `git clone https://github.com/atabegruslan/ReactJS-Flux-Redux.git`

2. `cd ReactJS-Flux-Redux` and `npm install`

3. Setup Mongo Database (See below)

4. Transpile:  `npm run transpile` or  `npm run watch` (`npm run watch` is a `package.json` script equivalent of `webpack --watch`, but for non-globally installed `npm install webpack --save-dev`)

5. Backend: `npm run start`

6. Serve: `npm run serve`

7. In browser: open: `http://127.0.0.1:8081/flux/` or `http://127.0.0.1:8081/react/` or `http://127.0.0.1:8081/redux/`

8. To stop this server process and free up the port, press `Cntr + C`, or find and delete the process:

![Stop Webpack Dev Server](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/Stop-webpack-dev-server.PNG "Stop Webpack Dev Server")

### Setup Mongo Database

1. Install mongo
2. In directories: create `C:/data/db`
3. Start mongo database server: In `C:/data/` directory, give this command: `mongod --dbpath .` in the command line. Keep this terminal open.

```
$mongo
>use tripadvisor
>db.createCollection("destination")
>db.createCollection("rating")

>db.destination.insert({"destination" : "Istanbul", "country" : "Turkey"})
>db.destination.insert({"destination" : "Derinkuyu", "country" : "Turkey"})

>db.rating.insert({"destination" : "Derinkuyu", "rating" : "Underground"})
>db.rating.insert({"destination" : "Istanbul", "rating" : "Architectural"})
```

## Notes - React Basics

### Use React to make simple 2 way bind:

#### 1. Initializing, setting and getting state

![Initializing, setting and getting state](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/React-state.PNG "Initializing, setting and getting state")

Whenever state changes, the React DOM re-renders.

#### 2. Passing props down to children

![Passing props down to children](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/React-passing-props-down.PNG "Passing props down to children")

#### 3. Event

![Event](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/Event.PNG "Event")

## Flux - React Basics

![Flux](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/Flux.PNG "Event")

## Redux - React Basics

![Redux](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/Redux.PNG "Event")

## References:

- https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b <sup>very good</sup>
- https://www.youtube.com/watch?v=9kJVYpOqcVU <sup>very good webpack</sup>
- https://medium.com/@fay_jai/react-elements-vs-react-components-vs-component-backing-instances-14d42729f62
- https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97
- https://www.codementor.io/@tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
- https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/
- https://github.com/reactjs/react-tutorial
- https://github.com/learncodeacademy/react-js-tutorials
- https://github.com/meteor/simple-todos-react
- https://dzone.com/articles/top-10-most-common-commands-for-beginners
- https://www.npmjs.com/package/koa-cors
- https://github.com/koajs/cors
- https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
- https://medium.com/@raju.allen/a-simple-crud-application-with-login-on-react-redux-axios-nodejs-rest-api-mongodb-part-ii-376606eb67a7
- https://www.freecodecamp.org/news/react-interview-question-what-gets-rendered-in-the-browser-a-component-or-an-element-1b3eac777c85/
- https://jscomplete.com/learn/react-beyond-basics/react-fundamentals
- https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html
- https://stackoverflow.com/questions/43002099/rules-vs-loaders-in-webpack-whats-the-difference
- https://webpack.js.org/configuration/
- https://webpack.js.org/loaders/babel-loader/
