fetch("http://localhost:3000/api/v1/birthdays", {
    'headers': {'Authorization': 'Bearer ' + localStorage.getItem('token')}
}).then(result =>{
    return result.json();
}).catch(err =>{
    console.log("Your token was fault");
})

//redirect if not logged in
if (!localStorage.getItem("token")) {
    window.location.href = "login";
}

//primus
primus = Primus.connect("/", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

