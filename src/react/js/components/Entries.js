var React = require('react');
var axios = require('axios');

var Entries = React.createClass({

	update: function(e)
	{
		var data = {
			"destination":e.target.parentElement.parentElement.childNodes[0].innerText,
			"rating":e.target.parentElement.childNodes[0].value
		};

		/* --- jQuery AJAX --- */
		// $.ajax({
		// 	type: 'PUT',
		// 	url: '/api/',
		// 	dataType: 'json',
		// 	data: data,
		// 	success: function(res) {
		// 		console.dir(res);
		// 		window.location = "/react/";
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.dir("Update Error");
		// 		console.dir(xhr);
		// 		console.dir(status);
		// 		console.dir(err);
		// 	}.bind(this)
		// });			

		/* --- Fetch API --- */
		// fetch('/api/', {
		// 	method: 'put',
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		'content-type' : 'application/json'
		// 	}
		// })
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		console.dir(res);
		// 		window.location = "/react/";
		// 	})
		// 	.catch(err => console.dir(err));

		// Without proxy: axios.put("http://localhost:3000/"

		/* --- Axios library --- */
		axios.put("/api/", data)
			.then((res) => {
				console.dir(res);
				window.location = "/react/";
			});
	},
	
	del: function(e)
	{
		var data = {
			"destination":e.target.parentElement.parentElement.childNodes[0].innerText
		};
		
		/* --- jQuery AJAX --- */
		// $.ajax({
		// 	type: 'DELETE',
		// 	url: '/api/',
		// 	dataType: 'json',
		// 	data: data,
		// 	success: function(res) {
		// 		console.dir(res);
		// 		window.location = "/react/";
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.dir("Delete Error");
		// 		console.dir(xhr);
		// 		console.dir(status);
		// 		console.dir(err);
		// 	}.bind(this)
		// });		

		/* --- Fetch API --- */
		// fetch('/api/', {
		// 	method: 'delete',
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		'content-type' : 'application/json'
		// 	}
		// })
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		console.dir(res);
		// 		window.location = "/react/";
		// 	})
		// 	.catch(err => console.dir(err));	

		// Without proxy: axios.delete("http://localhost:3000/"

        /* --- Axios library --- */
		axios.delete("/api/", {'data':data})
			.then((res) => {
				console.dir(res);
				window.location = "/react/";
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
					<button type='button' onClick={this.update}>Edit</button>
					<button type='button' onClick={this.del}>Delete</button>
				</td>
			</tr>
		);
	}
});

module.exports = Entries;