## Check if Node.js is working:

Check if node works:

In terminal: `node testnode.js`

## Run App:

1. `git clone https://github.com/atabegruslan/ReactJS-Flux-Redux.git`

2. `cd ReactJS-Flux-Redux` and `npm install`

3. Setup Mongo Database (See below)

4. Transpile:  `npm run transpile` or  `npm run watch` (`npm run watch` is a `package.json` script equivalent of `webpack --watch`, but for non-globally installed `npm install webpack --save-dev`)

5. Backend: `npm run start`

6. Serve: `npm run serve`

7. In browser: open: `http://127.0.0.1:8081/flux/` or `http://127.0.0.1:8081/react/` or `http://127.0.0.1:8081/redux/`

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
