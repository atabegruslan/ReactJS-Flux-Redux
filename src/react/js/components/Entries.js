var React = require('react');

var Entries = React.createClass({

	render: function()
	{
		return (
			<tr>
				<td>{this.props.item.destination}</td>
				<td>{this.props.item.country}</td>
				<td>{this.props.item.rating}</td>
			</tr>
		);
	}
});

module.exports = Entries;