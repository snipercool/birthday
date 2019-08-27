const config = require('config');

var btnLogout = document.querySelector("#logout_button").addEventListener("click", () => {

    localStorage.removeItem("token");
    window.location.href = process.env.baseuri + "/login" || config.get('baseUrl.uri') + "/login";

});
