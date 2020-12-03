import React from "react";
//import { observer } from "mobx-react"

// https://stackoverflow.com/questions/40721277/mobx-leading-decorators-must-be-attached-to-a-class-declaration
// https://ultimatecourses.com/blog/react-create-class-versus-component
// https://mobx.js.org/observable-state.html#makeobservable
// https://doc.ebichu.cc/mobx/refguide/observer-component.html
// https://github.com/mobxjs/mobx-react/blob/master/README_v5.md#observercomponentclass
// https://codingislove.com/setup-mobx-react-context/
// https://mobx.js.org/react-integration.html

// https://github.com/mobxjs/mobx-react#choosing-your-version

// Actually - this is no way to continue with MobX, when the React version is this old.
// Please continue to https://github.com/atabegruslan/React-MobX

var List = React.createClass({
	render() {
		return (
			<div className='container'>
			
				<h1>Trip Advisor</h1>

				<p>{this.props.entriesStore.entries[0]}</p>

			</div>
		);
	}
});

module.exports = List;
