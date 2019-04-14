
document.querySelector('#generate-names').addEventListener('submit', loadNames);



//Execute the function to query the api
function loadNames(e) {
	e.preventDefault();


	//Read the values form the form and create the variables

	const origin = document.getElementById('country').value;
	const gender = document.getElementById('genre').value;
	const amount = document.getElementById('quantity').value; 


	// Build the URL
	let url = 'https://uinames.com/api/?';
	
	//Read the origin and append to url
	if(origin !== '') {
		url += `region=${origin}&`;
	}

	//Read the genre and append to url
	if(gender !== '') {
		url += `gender=${gender}&`;
	}

	//Read the genre and append to url
	if(amount !== '') {
		url += `amount=${amount}&`;
	}

	//console.log(url);


	//AJAX CALL	

	const xhr = new XMLHttpRequest();

	//open the connection
	xhr.open('GET',url, true);

	//Execute the function

	xhr.onload = function() {
		if(this.status === 200) {

			//recieved data will be json array so parse it to json
			const names =  JSON.parse( this.responseText );
			/*console.log(names);*/

			//Insert result

			let html = '<h2>Generated Names</h2>';
			html +='<ul class="list">';
			names.forEach(function(name){
				html +=`
					<li>${name.name}</li>
				`;
			});

			html +='</ul>';

			document.querySelector('#result').innerHTML = html;
		}	
	}

	//send the request

	xhr.send();

}

