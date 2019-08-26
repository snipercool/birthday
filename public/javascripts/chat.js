fetch("http://localhost:3000/api/v1/birthdays", {
    'headers': {'Authorization': 'Bearer ' + localStorage.getItem('token')}
}).then(result =>{
    return result.json();
}).catch(err =>{
    console.log("Your token was fault").
})