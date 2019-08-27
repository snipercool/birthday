fetch("/api/v1/birthdays", {
    'headers': {'Authorization': 'Bearer ' + localStorage.getItem('token')}
}).then(result =>{
    return result.json();
}).then(json =>{
    json.data.birthday.forEach(text => {
        const getMessage = `
        <div class="birthdaychat">
            <h3 class="username">${text.username}</h3>
            <p class="chat__text">${text.chat}</p>
        </div>
        `
        
    });
}).catch(err =>{
    console.log("Your token was fault");
})

//show message
const showMessage = (json) =>{
    const text = `
    <div class="birthdaychat">
        <h3 class="username">${json.data.text.username}</h3>
        <p class="chat__text">${json.data.text.chat}</p>
    </div>
    `
}

//redirect if not logged in
if (!localStorage.getItem("token")) {
    window.location.href = "login";
}

//primus
primus = Primus.connect("birthday-herexamen.herokuapp.com", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});


var chat = document.querySelector("#chat_submit").addEventListener("click", () => {
    let chatInput = document.querySelector("#chat__input").value;
    fetch("/api/v1/birthdays", {
       method: "post",
       headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + localStorage.getItem('token')
       },
       body: JSON.stringify({
           "chat": chatInput,
       })
    }).then(response => {
        return response.json();
    }).then(json => {
       chatInput.value="";
       primus.write({
           "action": "createMessage",
           "data": json
       })
    })
    e.preventDefault();
});