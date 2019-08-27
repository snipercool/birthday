var btnSignup = document.querySelector("#register_button").addEventListener("click", () => {
    let username = document.querySelector("#register_username").value;
    let password = document.querySelector("#register_password").value;
    let birthdate = document.querySelector("#register-birthdate").value;
    fetch('http://localhost:3000/users/signup', {
       method: "post",
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           "username": username,
           "password": password,
           "birthdate": birthdate
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
    console.log(json);
});