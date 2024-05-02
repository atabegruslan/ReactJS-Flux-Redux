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

![](/Illustrations/Component_Elem_Inst.png)

## Class vs Functional Components, when to use:

- https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/
- https://www.twilio.com/blog/react-choose-functional-components
- https://stackoverflow.com/questions/36097965/when-to-use-es6-class-based-react-components-vs-functional-es6-react-components/36137801#36137801

So functional components are simpler and seems to be the way of the future. They simply take props and render. Use class components only when you want more complex state management abilities.

For conversion between class <-> functional components, here's how: https://jsfiddle.net/atabegaslan/uspx4mLy/

## Related concepts

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
- https://ultimatecourses.com/blog/react-create-class-versus-component
- https://medium.com/hackernoon/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607
- v17 -> v18: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
- v18 -> v17: https://dev.to/lowla/create-react-app-with-a-previous-version-of-react-4g03

# More Theory

## Lifecycle events & Hooks

- https://www.w3schools.com/REACT/react_lifecycle.asp
- https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/
- https://reactjs.org/docs/hooks-overview.html
    - https://www.freecodecamp.org/news/react-hooks-cheatsheet/amp/
- https://www.youtube.com/watch?v=TNhaISOUy6Q <sup>Good</sup>
- https://www.youtube.com/watch?v=LlvBzyy-558
- https://reactjs.org/docs/hooks-reference.html
- https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h <sup>Good</sup>
    - `useEffect` common pitfalls: https://www.youtube.com/watch?v=QQYeipc_cik
    - `useMemo`: https://www.youtube.com/watch?v=THL1OPn72vo
    - `useCallback`: https://www.youtube.com/watch?v=IL82CzlaCys
- https://www.youtube.com/playlist?list=PL_-VfJajZj0W8-gf0g3YCCyFh-pVFMOgy
- https://github.com/mobxjs/mobx-react/issues/447
- https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks

![](/Illustrations/React_lifecycle.png)

## Refs and `useRef` hook

<table>
<tr>
<td>
<b>Refs</b>

https://www.youtube.com/watch?v=t4okzJc6_Ak
</td>
<td>
<b>useRef hook</b>

https://www.youtube.com/watch?v=t2ypzz6gJm0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h
</td>
</tr>
<tr>
<td>
```
// to complete
```
</td>
<td>
```
// to complete
```
</td>
</tr>
</table>

## `forwardRef`

Passing ref to child 

https://www.youtube.com/watch?v=RLWniwmfdq4

## Ref in regards to reactivity

https://www.youtube.com/watch?v=sAj6tdVS2cA

## `useReducer`

![useReducer](https://github.com/atabegruslan/ReactJS-Flux-Redux/assets/20809372/27359fb3-040b-405d-8725-9d4723ab32af)

## Context API and `useContext` hook

The related Provider pattern example: https://github.com/Ruslan-Aliyev/ReactJS_ProviderPattern

<table>
<tr>
<td>
<b>Context API</b>
	
For class components

https://www.youtube.com/watch?v=TENin-HxvRg
   
https://reactjs.org/docs/context.html
</td>
<td>
<b>`useContext` hook</b>

For function components

https://www.youtube.com/watch?v=5LrDIWkK_Bc&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h
</td>
</tr>
<tr>
<td>
<pre>
//==App.js========================================
import React from 'react';
import PageContextProvider from './PageContextProvider';
import Header from './Header';
function App() {
    return (
        &lt;div className=&quot;App&quot;&gt;
            &lt;PageContextProvider&gt;
                &lt;Header /&gt;
            &lt;/PageContextProvider&gt;
        &lt;/div&gt;
    );
}
export default App;
//==PageContextProvider.js=========================
import React, { useState, useEffect, createContext } from 'react';
export const PageContext = createContext();
const PageContextProvider = (props) =&gt; {
    const [user, setUser] = useState({
        'name': 'harry potter'
    });
    return (
        &lt;PageContext.Provider value={{ user: user }}&gt;
        	{props.children}
        &lt;/PageContext.Provider&gt;
    );
}
export default PageContextProvider;
//==Header.js=====================================
import React, { Component } from 'react';
import { PageContext } from './PageContextProvider';
class Header extends Component {
    render() {
        return (
            &lt;PageContext.Consumer&gt;
                {user =&gt; {
                    return &lt;div className=&quot;header&quot;&gt;{user.name}&lt;/div&gt;
                }}
            &lt;/PageContext.Consumer&gt;
        );
    }
}
export default Header;
</pre>
</td>
<td>
<pre>
//==App.js========================================
import React from 'react';
import PageContextProvider from './PageContextProvider';
import Header from './Header';
function App() {
    return (
        &lt;div className=&quot;App&quot;&gt;
            &lt;PageContextProvider&gt;
                &lt;Header /&gt;
            &lt;/PageContextProvider&gt;
        &lt;/div&gt;
    );
}
export default App;
//==PageContextProvider.js=========================
import React, { useState, useEffect, createContext } from 'react';
export const PageContext = createContext();
const PageContextProvider = (props) =&gt; {
    const [user, setUser] = useState({
        'name': 'harry potter'
    });
    return (
        &lt;PageContext.Provider value={{ user: user }}&gt;
        	{props.children}
        &lt;/PageContext.Provider&gt;
    );
}
export default PageContextProvider;
//==Header.js=====================================
import React, { useContext } from 'react';
import { PageContext } from './PageContextProvider';
const Header = () =&gt; {
    const { user } = useContext(PageContext);
    return (
        &lt;div className=&quot;header&quot;&gt;{user.name}&lt;/div&gt;
    );
}
export default Header;
</pre>
</td>
</tr>
</table>

## Custom Hooks & `useDebugValue`

https://www.w3schools.com/react/react_customhooks.asp

`useFetch.js`
```
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);

    useDebugValue(data ?? 'loading...'); // useDebugValue adds a label to this custom hook, which can be seen in the React dev tools console

    return [data];
};

export default useFetch;
```

`index.js`
```
import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
```

## Error Boundaries

<table>
<tr>
<td>
<b>Class component</b>

https://www.youtube.com/watch?v=hszc3T0hdvU
</td>
<td>
<b>Function component</b>

https://www.npmjs.com/package/react-error-boundary
</td>
</tr>
<tr>
<td>
<pre>
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		state = { hasError: false };
	}
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		errorService.log({ error, errorInfo });
	}
	render() {
		if (this.state.hasError) {
			return &lt;h1&gt;Oops, we done goofed up&lt;/h1&gt;;
		}
		return this.props.children;
	}
}
ReactDOM.render(
	&lt;ErrorBoundary&gt;
		{/* This App have problems */}
		&lt;App /&gt; 
	&lt;/ErrorBoundary&gt;,
	document.getElementById('root')
)
</pre>
</td>
<td>
<pre>
import {ErrorBoundary} from 'react-error-boundary'
function ErrorFallback({error, resetErrorBoundary}) {
	return (
		&lt;div role=&quot;alert&quot;&gt;
			&lt;p&gt;Something went wrong:&lt;/p&gt;
			&lt;pre&gt;{error.message}&lt;/pre&gt;
			&lt;button onClick={resetErrorBoundary}&gt;Try again&lt;/button&gt;
		&lt;/div&gt;
	)
}
const ui = (
	&lt;ErrorBoundary FallbackComponent={ErrorFallback}
	onReset={() =&gt; {
		// reset the state of your app 
		// so the error doesn't happen again
	}}&gt;
		&lt;ComponentThatMayError /&gt;
	&lt;/ErrorBoundary&gt;
)
</pre>
</td>
</tr>
</table>

- https://www.digitalocean.com/community/tutorials/react-error-boundaries
- https://www.youtube.com/watch?v=ieOhZJbLptc&list=RDCMUCCTVrRB5KpIiK6V2GGVsR1Q

## Fragment

- https://reactjs.org/docs/fragments.html
- https://www.youtube.com/watch?v=GtLvQ5TuM2s

## Code Split

![react router code splitting](https://github.com/atabegruslan/ReactJS-Flux-Redux/assets/20809372/81f6104f-3430-49e3-84d1-16ddf691248f)

- Before understanding code split, read Lazy load first: https://www.youtube.com/watch?v=tV9gvls8IP8
- https://www.youtube.com/watch?v=Ef3nvKLS4no
- https://reactjs.org/docs/code-splitting.html
- https://github.com/Ruslan-Aliyev/React-Routing#code-splitting
- https://www.youtube.com/watch?v=B36pSPMSzZI
- https://www.youtube.com/watch?v=nks5rQEZsQg

## Debugging

- Time Travel Debugging: https://medium0.com/the-web-tub/time-travel-in-react-redux-apps-using-the-redux-devtools-5e94eba5e7c0

## Component composition

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
   - Apollo Client & GraphQL
      - Demo in Vue: https://github.com/Ruslan-Aliyev/laravel_notes#graphql
      - Tutorial in React: https://www.youtube.com/playlist?list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx
   - RxJS, good tutorial: https://www.youtube.com/watch?v=2LCo926NFLI
   - ( Concept of push & pull: https://github.com/atabegruslan/Others/blob/master/Illustrations/Development/js/async/readme.md#idea-of-pull-vs-push )

## Redux Middlewares

- https://redux.js.org/tutorials/fundamentals/part-4-store#middleware
- https://github.com/reduxjs/redux-thunk
- https://redux-saga.js.org/

![](/Illustrations/thunk.PNG)

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

![](/Illustrations/Stop-webpack-dev-server.PNG)

# CSS

- https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757
- https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3
- https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html

## Scoping styles

- https://www.upbeatcode.com/react/css-scoping-in-react-everything-you-need-to-know/
- https://stackoverflow.com/questions/47090574/how-to-make-react-css-import-component-scoped/47090832#47090832
- https://dev.to/alserembani/react-vs-vue-how-about-some-style-1ofi
- Comparison to Vue's `<style scoped`: https://vue-loader.vuejs.org/guide/scoped-css.html

# Useful Libraries

- https://www.npmjs.com/package/koa-cors
- https://github.com/koajs/cors

# Webpack

- https://github.com/atabegruslan/Others/blob/master/Development/php_js_knowhows.md#webpack
- https://stackoverflow.com/questions/43002099/rules-vs-loaders-in-webpack-whats-the-difference
- https://webpack.js.org/configuration/

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

---

# More tutorials

- https://www.youtube.com/watch?v=zM93yZ_8SvE

