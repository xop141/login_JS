
function login() {

    const username = document.getElementById("username").value
    const username_container = document.createElement("div")
    document.body.appendChild(username_container)
    const password = document.getElementById("password").value
    const password_container = document.createElement("div")
    document.body.appendChild(password_container)

    if (password.length == 0 && username.length == 0) {
        password_container.innerText = "first time?"
        password_container.style.backgroundColor = ('red')

    } else if (password.length == 0) {
        password_container.innerText = "codoo hiichechde"
    } else if (username.length == 0) {
        username_container.innerText = "neree medeh?"
    } else {
        password_container.innerText = "ur password:" + password
        username_container.innerText = "ur username: " + username
    }



}
