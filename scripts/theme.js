const themeSwitchers = document.getElementsByClassName("theme-box");

for (let i = 0; i < themeSwitchers.length; i++) {
    const element = themeSwitchers[i];
    element.addEventListener("click", changeTheme);
}

function changeTheme() {
    console.log("that's working");
}