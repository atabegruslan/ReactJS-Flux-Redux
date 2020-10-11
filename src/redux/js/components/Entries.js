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
					<button type='button'>Edit</button>
					<button type='button'>Delete</button>
				</td>
			</tr>
		);
	}
});

module.exports = Entries;