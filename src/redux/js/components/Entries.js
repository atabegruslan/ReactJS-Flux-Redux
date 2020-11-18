import { updateEntry, deleteEntry } from "../actions/EntriesActions.js"
import { connect } from "react-redux"

var React = require('react');

var Entries = React.createClass({

	render: function()
	{
		return (
			<tr>
				<td>{this.props.item.destination}</td>
				<td>{this.props.item.country}</td>
				<td>
					<input type='text' name='rating' defaultValue={this.props.item.rating} /> 
					<button type='button' onClick={this.props.updateEntry}>Edit</button>
					<button type='button' onClick={this.props.deleteEntry}>Delete</button>
				</td>
			</tr>
		);
	}
});

const mapStateToProps = state => {
	return {
		entries: state.entryReducer.entries,
		redirect: state.entryReducer.redirect
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateEntry: (e) => dispatch(updateEntry(e.target.parentElement)),
		deleteEntry: (e) => dispatch(deleteEntry(e.target.parentElement))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entries)
//module.exports = Entries;