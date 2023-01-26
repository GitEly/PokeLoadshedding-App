let themeSheet = document.getElementById("theme-sheet");

function setTheme(selection) {
    let newLink = "./styles/theme"+selection+".css";
    themeSheet.setAttribute("href", newLink);
}