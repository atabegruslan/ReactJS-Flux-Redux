var React = require('react');

import * as EntriesActions from "../actions/EntriesActions";

var Entries = React.createClass({

	updateEntry: function(e)
	{
		EntriesActions.updateEntry({
			destination : e.target.parentElement.parentElement.childNodes[0].innerText, 
			rating      : e.target.parentElement.childNodes[0].value
		});
	},
	
	deleteEntry: function(e)
	{
		EntriesActions.deleteEntry({
			destination : e.target.parentElement.parentElement.childNodes[0].innerText
		});
	},
	
	render: function()
	{
		return (
			<tr>
				<td>{this.props.item.destination}</td>
				<td>{this.props.item.country}</td>
				<td>
					<input type='text' name='rating' defaultValue={this.props.item.rating} /> 
					<button type='button' onClick={this.updateEntry.bind(this)}>Edit</button>
					<button type='button' onClick={this.deleteEntry.bind(this)}>Delete</button>
				</td>
			</tr>
		);
	}
});

module.exports = Entries;