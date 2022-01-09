// Simple Javascript Get Api

const userData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

//DO something witht the data

userData.then(data => console.log(data));

//Post Api 

const userData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: myBody,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    const data = await response.json();
}

//AXIOS Api call 

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response.data));
    

