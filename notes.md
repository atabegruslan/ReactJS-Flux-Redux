# Setup

- https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97
- https://www.codementor.io/@tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-
- https://reactjs.org/docs/create-a-new-react-app.html
- https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-create-react-app
- From scratch:
   - https://dev.to/siradji/react-without-create-react-app-start-building-your-react-project-like-a-professional-1hih
   - https://medium0.com/swlh/how-to-set-up-a-react-project-from-scratch-78261a9c2bbb

# Deploy

- https://blog.logrocket.com/8-ways-to-deploy-a-react-app-for-free/

# Components, Elements & Instances

- https://medium.com/@fay_jai/react-elements-vs-react-components-vs-component-backing-instances-14d42729f62
- https://www.freecodecamp.org/news/react-interview-question-what-gets-rendered-in-the-browser-a-component-or-an-element-1b3eac777c85/
- https://stackoverflow.com/questions/30971395/difference-between-react-component-and-react-element

***

React Element is what component returns; An object (untouchable in mem) that describes the DOM nodes that a component represents. 

Each component instance has to keep references to its DOM node, <br />
   and to the instances of the children components, <br />
   and create, update, and destroy them when the time is right.

An element is a plain object describing a component instance or DOM node and its desired properties. <br />
It contains only information about the:
- component type (for example, a Button),
- its properties (for example, its color),
- and any child elements inside it.

A React element is not an actual instance. <br />
Rather, it is a way to tell React what you want to see on the screen. <br />
React Elements are immutable. You cant interact with it.

Elements are just descriptions and not the actual instances. <br />
They don’t refer to anything on the screen when you create them.

***

![](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/Component_Elem_Inst.png)

- https://reactpatterns.com/
- https://viblo.asia/p/component-patterns-in-react-6J3ZgjvgKmB

- https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
- https://overreacted.io/how-are-function-components-different-from-classes/
- https://dev.to/prabangkoro/react-method-component-vs-class-component-56fj

- https://coursework.vschool.io/react-vs-reactdom/
- https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/

# Old & New

- https://www.javatpoint.com/react-version
- https://stackoverflow.com/questions/33526493/react-createclass-vs-extends-component
- https://medium.com/hackernoon/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607

# More Theory

- https://www.w3schools.com/REACT/react_lifecycle.asp
- https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/
- https://reactjs.org/docs/hooks-overview.html
   - https://www.freecodecamp.org/news/react-hooks-cheatsheet/amp/
- https://www.youtube.com/watch?v=TNhaISOUy6Q <sup>Good</sup>
- https://github.com/mobxjs/mobx-react/issues/447

![](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/React_lifecycle.png)

- https://reactjs.org/docs/context.html
- https://www.digitalocean.com/community/tutorials/react-error-boundaries , https://www.youtube.com/watch?v=ieOhZJbLptc&list=RDCMUCCTVrRB5KpIiK6V2GGVsR1Q
- https://reactjs.org/docs/fragments.html , https://www.youtube.com/watch?v=GtLvQ5TuM2s
- Code Split: 
   - https://reactjs.org/docs/code-splitting.html
   - https://www.youtube.com/watch?v=tV9gvls8IP8
   - https://www.youtube.com/watch?v=Ef3nvKLS4no
   - https://github.com/Ruslan-Aliyev/React-Routing#code-splitting
- https://www.youtube.com/watch?v=t4okzJc6_Ak
- https://www.youtube.com/watch?v=jVtxC6CKzYU
- More to learn: react, component composition

# Frameworks

- https://opensource.com/article/20/1/react-javascript-frameworks

# Patterns

- https://www.toptal.com/react/react-context-api , https://www.youtube.com/watch?v=XkBB3pPY3t8&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=2
- https://scotch.io/courses/5-essential-react-concepts-to-know-before-learning-redux/presentational-and-container-component-pattern-in-react

# Flux, Redux, MobX, etc...

- https://www.youtube.com/watch?v=76FRrbY18Bs
- https://www.newline.co/fullstack-react/30-days-of-react/day-18/
- https://www.imaginea.com/redux-vs-mobx-what-you-need-to-know/
- https://www.educba.com/redux-alternatives/
- https://www.valentinog.com/blog/redux/
- https://stackoverflow.com/questions/33526596/what-are-the-advantages-of-react-and-flux-apart-from-virtual-dom-concept
- https://www.newline.co/fullstack-react/articles/redux-with-mark-erikson/
- https://www.clariontech.com/blog/mvc-vs-flux-vs-redux-the-real-differences
- https://yourstory.com/mystory/flux-vs-redux
- https://dev.to/rosyshrestha/build-your-first-app-with-mobx-and-react-4896
- https://www.npmjs.com/package/mobx-react
- Alternatives to Redux
   - MobX, eg demo https://github.com/atabegruslan/React-MobX
   - Apollo Client & GraphQL, eg demo https://github.com/Ruslan-Aliyev/laravel_notes#graphql (though in Vue)
   - RxJS, good tutorial: https://www.youtube.com/watch?v=2LCo926NFLI
   - ( Concept of push & pull: https://github.com/atabegruslan/ReactJS-Flux-Redux/tree/master/Illustrations/push-pull/ )

## Redux Middlewares

- https://redux.js.org/tutorials/fundamentals/part-4-store#middleware
- https://github.com/reduxjs/redux-thunk
- https://redux-saga.js.org/

![](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/thunk.PNG)

# General Tutorials

- https://github.com/reactjs/react-tutorial
- https://github.com/learncodeacademy/react-js-tutorials
- https://github.com/meteor/simple-todos-react
- https://jscomplete.com/learn/react-beyond-basics/react-fundamentals

# Specific Tutorials

- https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
- https://medium.com/@raju.allen/a-simple-crud-application-with-login-on-react-redux-axios-nodejs-rest-api-mongodb-part-ii-376606eb67a7

- Add one more row: https://github.com/Ruslan-Aliyev/React-AddRows

# Useful Basics

- https://dzone.com/articles/top-10-most-common-commands-for-beginners
- https://stackoverflow.com/questions/36994564/how-can-one-tell-the-version-of-react-running-at-runtime-in-the-browser
- To stop this server process and free up the port, press Cntr + C, or find and delete the process:

![](https://raw.githubusercontent.com/atabegruslan/ReactJS-Flux-Redux/master/Illustrations/Stop-webpack-dev-server.PNG)

# CSS

- https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757
- https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3
- https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html

# Useful Libraries

- https://www.npmjs.com/package/koa-cors
- https://github.com/koajs/cors

# Webpack

- https://stackoverflow.com/questions/43002099/rules-vs-loaders-in-webpack-whats-the-difference
- https://webpack.js.org/configuration/
- https://webpack.js.org/loaders/babel-loader/

# Others

- https://kentcdodds.com/blog/profile-a-react-app-for-performance

# Specific Topics

## Proxying: Same back and front port

- https://stackoverflow.com/questions/50591374/mern-stack-express-and-react-on-same-port
- https://medium.com/bb-tutorials-and-thoughts/react-how-to-proxy-to-backend-server-5588a9e0347
- https://stackoverflow.com/questions/44365577/proxy-in-package-json-not-affecting-fetch-request <sup>webpack</sup>
- https://stackoverflow.com/questions/51968782/proxy-included-in-package-json-not-working/52817464#52817464 <sup>Differently in Vue</sup>

## Router: Refreshing and Redirecting

- https://stackoverflow.com/questions/41889789/how-to-refresh-list-after-successfully-created-post-in-react-redux-form
- https://stackoverflow.com/questions/42985478/react-and-redux-redirect-after-action/42985875
- https://www.pluralsight.com/guides/how-to-transition-to-another-route-on-successful-async-redux-action <sup>Good</sup>
- https://stackoverflow.com/questions/35706835/react-router-redirect-after-action-redux
- https://forum.freecodecamp.org/t/how-can-i-redirect-after-successful-post-react-redux-node-express/259863/5
- https://medium.com/@panktip85/redirect-with-react-redux-afeda0bd12fb
- https://www.xspdf.com/resolution/51822219.html <sup>Good</sup>
- https://www.tutorialspoint.com/reactjs/reactjs_router.htm
- https://www.sitepoint.com/react-router-complete-guide/ <sup>Good</sup>
- https://reactrouter.com/web/api/Redirect
- https://stackoverflow.com/questions/46820682/how-do-i-reload-a-page-with-react-router <sup>Good</sup>
- https://www.npmjs.com/package/react-router

## Save-Dev flag

npm install [package_name] --save  is used to save the package required for the application to run. <br />
npm install [package_name] --save-dev is used to save the package for development purpose. Example: unit tests, minification..

Short Explanation https://stackoverflow.com/questions/22891211/what-is-the-difference-between-save-and-save-dev <br />
Long Explanation https://stackoverflow.com/questions/33504641/whats-the-difference-between-save-and-save-dev-in-npm-install/33507291

Note 1: https://www.youtube.com/watch?v=w5TupxbnnrM&t=261s <sup>to 426s</sup> <br />
Note 2: https://github.com/Microsoft/types-publisher/issues/81#issuecomment-234051338
