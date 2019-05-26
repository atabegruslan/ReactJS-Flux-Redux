import React from "react";

import Entries from "./Entries";

var List = React.createClass({

	getInitialState:function()
	{
		return {entries: ''}
	},

	componentWillMount:function()
	{
		this.setState( 
			{
				entries: [
					{destination: "Istanbul", country: "Turkey", rating: "Architectural"},
					{destination: "Derinkuyu", country: "Turkey", rating: "Underground"}
				]
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
				
			</div>
		);
	}
});

module.exports = List;