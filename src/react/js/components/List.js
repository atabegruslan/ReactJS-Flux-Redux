import React from "react";
import axios from "axios";

import Entries from "./Entries";

var List = React.createClass({

	getInitialState:function()
	{
		return {entries: ''}
	},

	componentWillMount:function()
	{
		/* --- Hard code --- */
		// this.setState({
		// 	entries: [
		// 		{destination: "Istanbul", country: "Turkey", rating: "Architectural"},
		// 		{destination: "Derinkuyu", country: "Turkey", rating: "Underground"}
		// 	]
		// });

		/* --- jQuery AJAX --- */
		// $.ajax({
		// 	type: 'GET',
		// 	url: 'http://localhost:3000/read',
		// 	success: function(data) {
		// 		console.dir( JSON.parse(data) );
		// 		this.setState( JSON.parse(data) );
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.dir("Read Error");							
		// 		console.dir(xhr);
		// 		console.dir(status);
		// 		console.dir(err);
		// 	}.bind(this)
		// });

		/* --- Fetch API --- */
		// fetch('http://localhost:3000/read')
		// 	.then(data => data.json())
		// 	.then(data => {
		// 		console.dir(data);
		// 		this.setState(data);
		// 	})
		// 	.catch(err => console.dir(err));

		/* --- Axios library --- */
		axios.get("http://localhost:3000/read")
			.then((data) => {
				console.dir(data);
				this.setState(data.data);
			});
	},
			
	create: function(e)
	{
		var data = {
			'destination': e.target.parentElement.childNodes[0].value, 
			'country'    : e.target.parentElement.childNodes[1].value, 
			'rating'     : e.target.parentElement.childNodes[2].value
		};

		/* --- jQuery AJAX --- */
		// $.ajax({
		// 	type: 'POST',
		// 	url: 'http://localhost:3000/',
		// 	dataType: 'json',
		// 	data: data,
		// 	success: function(res) {
		// 		console.dir(res);
		// 		window.location = "http://127.0.0.1:8081/react/";
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.dir("Create Error");
		// 		console.dir(xhr);
		// 		console.dir(status);
		// 		console.dir(err);
		// 	}.bind(this)
		// });	

		/* --- Fetch API --- */
		// fetch('http://localhost:3000/', {
		// 	method: 'post',
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		'content-type' : 'application/json'
		// 	}
		// })
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		console.dir(res);
		// 		window.location = "http://127.0.0.1:8081/react/";
		// 	})
		// 	.catch(err => console.dir(err));

		/* --- Axios library --- */
		axios.post("http://localhost:3000/", data)
			.then((res) => {
				console.dir(res);
				window.location = "http://127.0.0.1:8081/react/";
			});
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
					<button type='button' onClick={this.create}>New</button>
				</div>

			</div>
		);
	}
});

module.exports = List;