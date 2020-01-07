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
		// 	url: 'http://localhost:3000/',
		// 	dataType: 'json',
		// 	data: data,
		// 	success: function(res) {
		// 		console.dir(res);
		// 		window.location = "http://127.0.0.1:8081/react/";
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.dir("Update Error");
		// 		console.dir(xhr);
		// 		console.dir(status);
		// 		console.dir(err);
		// 	}.bind(this)
		// });			

		/* --- Fetch API --- */
		// fetch('http://localhost:3000/', {
		// 	method: 'put',
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
		axios.put("http://localhost:3000/", data)
			.then((res) => {
				console.dir(res);
				window.location = "http://127.0.0.1:8081/react/";
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
		// 	url: 'http://localhost:3000/',
		// 	dataType: 'json',
		// 	data: data,
		// 	success: function(res) {
		// 		console.dir(res);
		// 		window.location = "http://127.0.0.1:8081/react/";
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.dir("Delete Error");
		// 		console.dir(xhr);
		// 		console.dir(status);
		// 		console.dir(err);
		// 	}.bind(this)
		// });		

		/* --- Fetch API --- */
		// fetch('http://localhost:3000/', {
		// 	method: 'delete',
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
		axios.delete("http://localhost:3000/", {'data':data})
			.then((res) => {
				console.dir(res);
				window.location = "http://127.0.0.1:8081/react/";
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