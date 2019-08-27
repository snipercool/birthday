var btnSignin = document.querySelector("#login_button").addEventListener("click", () => {
    let username = document.querySelector("#login_username").value;
    let password = document.querySelector("#login_password").value;
    fetch("/login", {
       method: "post",
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           "username": username,
           "password": password,
       })
    }).then(response => {
        return response.json();
    }).then(json => {
        if (json.status === "success") {
            
            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = "http://localhost:3000";
        }
    })
});