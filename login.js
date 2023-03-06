function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("playerUsername", nameEl.value);
    window.location.href = "play.html";
    )
}