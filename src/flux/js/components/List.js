import React from "react";

import Entries from "./Entries";
import EntriesStore from "../stores/EntriesStore";
import * as EntriesActions from "../actions/EntriesActions";

var List = React.createClass({

	getInitialState:function()
	{
		return {entries: null}
	},

	componentWillMount:function()
	{
		EntriesActions.loadEntries();

		EntriesStore.on("create", () => {
			this.setState({entries: EntriesStore.getAll()});
		});

		EntriesStore.on("loadAll", () => {
			this.setState({entries: EntriesStore.getAll()});
		});
	},

	createEntry: function(e)
	{
		EntriesActions.createEntry(
			{
				type        : 'CREATE_ENTRY', 
				destination : e.target.parentElement.childNodes[0].value, 
				country     : e.target.parentElement.childNodes[1].value, 
				rating      : e.target.parentElement.childNodes[2].value
			}
		);
	},
	
	render: function()
	{
		var entries;

		if(this.state.entries !== null && this.state.entries.length > 0)
		{
			entries = this.state.entries.map(function(item){
				return <Entries item={item} />
			});
		}

		return (
			<div className='container'>
			
				<h1>Trip Advisor</h1>
				
				<div className='row'>
					<table className='table'>
						<thead>
							<tr><td>Destination</td><td>Country</td><td>Rating</td></tr>
						</thead>
						<tbody>
							{entries}
						</tbody>										
					</table>
				</div>
				
				<div className='row'>
					<input type='text' name='destination' /> 
					<input type='text' name='country' /> 
					<input type='text' name='rating' /> 
					<button type='button' onClick={this.createEntry.bind(this)}>New</button>
				</div>

			</div>
		);
	}
});

module.exports = List;