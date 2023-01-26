let themeSheet = document.getElementById("theme-sheet");

function setTheme(selection) {
    newLink = "./styles/theme"+selection+".css";
    themeSheet.setAttribute("href", newLink);
}