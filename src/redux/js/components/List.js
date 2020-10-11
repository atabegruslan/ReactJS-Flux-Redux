import React from "react";
import { connect } from "react-redux"
import { loadEntries } from "../actions/EntriesActions.js"
import Entries from "./Entries";

var List = React.createClass({

	componentWillMount: function()
	{
		this.props.loadEntries()
	},

	render: function()
	{
		console.log('entries');
		console.dir(this.props.entries);

		return (
			<div className='container'>
			
				<h1>Trip Advisor</h1>
				
				<div className='row'>
					<table className='table'>
						<thead>
							<tr><td>Destination</td><td>Country</td><td>Rating</td></tr>
						</thead>
						<tbody>
							
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
		entries: state.entries
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadEntries: () => dispatch(loadEntries())
		//createEntry: () => dispatch(createEntry())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List)
