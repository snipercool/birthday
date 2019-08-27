var btnLogout = document.querySelector("#logout_button").addEventListener("click", () => {

    localStorage.removeItem("token");
    window.location.href = "/login";

});
