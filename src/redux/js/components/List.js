import React from "react";
import { connect } from "react-redux"
import { loadEntries, createEntry } from "../actions/EntriesActions.js"
import Entries from "./Entries";

var List = React.createClass({

	componentWillMount: function()
	{
		this.props.loadEntries()
	},

	render: function()
	{
		var mappedEntries;

		if(typeof this.props.entries !== 'undefined' && this.props.entries.length > 0)
		{
			mappedEntries = this.props.entries.map(function(item) {
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
							{mappedEntries}
						</tbody>										
					</table>
				</div>
				
				<div className='row'>
					<input type='text' name='destination' /> 
					<input type='text' name='country' /> 
					<input type='text' name='rating' /> 
					<button type='button' onClick={this.props.createEntry}>New</button>
				</div>

			</div>
		);
	}
});

const mapStateToProps = state => {
	return {
		entries: state.entryReducer.entries
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadEntries: () => dispatch(loadEntries()),
		createEntry: (e) => dispatch(createEntry(e.target.parentElement))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List)
