fetch('http://localhost:3001/query')
    .then(response => response.json())
    .then(data => {
    console.log(data); // objeto retornado pelo servidor
    })
    .catch(error => {
    console.error(error);
});


