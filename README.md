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

7. In browser: open: `http://127.0.0.1/flux/` or `http://127.0.0.1/react/` or `http://127.0.0.1/redux/`

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

![Initializing, setting and getting state](/Illustrations/React-state.PNG "Initializing, setting and getting state")

Whenever state changes, the React DOM re-renders.

#### 2. Passing props down to children

![Passing props down to children](/Illustrations/React-passing-props-down.PNG "Passing props down to children")

#### 3. Event

![Event](/Illustrations/Event.PNG "Event")

## Flux - React Basics

![Flux](/Illustrations/Flux.PNG "Event")

## Redux - React Basics

![Flux to Redux](/Illustrations/redux_flux.PNG "Flux to Redux")

![Redux](/Illustrations/Redux.PNG "Event")

![](/Illustrations/redux.gif)

![](/Illustrations/Redux_Simple.png)

![](/Illustrations/Redux_Intermediate.png)

![](/Illustrations/redux_all_together.png)

![](/Illustrations/Redux_in_a_nutshell.PNG)

## MobX

![](/Illustrations/mobx.png)

![](/Illustrations/mobx_2.png)

![](/Illustrations/redux_mobx_1.PNG)

However, the MobX part of this project cannot be completed, because the React version here is too old.

Below is as far as it can go:

https://github.com/atabegruslan/ReactJS-Flux-Redux/blob/master/src/mobx/js/components/List.js

`npm run serve`

`http://127.0.0.1/mobx/`

To see this MobX continued in a newer version of React: https://github.com/atabegruslan/ReactJS-MobX

## References:

- https://www.youtube.com/watch?v=9kJVYpOqcVU <sup>webpack setup</sup>
- https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8 <sup>webpack tutorial</sup>
- https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b <sup>very good</sup>
- https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK <sup>catches on nicely at EP11 at Redux Middleware</sup>
- https://www.youtube.com/playlist?list=PL7pEw9n3GkoUZqnNQEVbLfTTVBIWBxXg9 <sup>good to learn from</sup>
- https://www.youtube.com/watch?v=e7ulH0iTlnI&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg <sup>More Tutorials</sup>
- https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d <sup>good</sup>

### Others

- https://www.freecodecamp.org/news/loading-data-in-react-redux-thunk-redux-saga-suspense-hooks-666b21da1569/
- https://github.com/redux-json-api/react-redux-json-api-example
- https://redux.js.org/introduction/examples
- https://blog.tylerbuchea.com/super-simple-react-redux-application-example/

