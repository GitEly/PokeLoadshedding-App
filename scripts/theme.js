// this script manage theme changes, storing into cache and
// retrieve if there is a cached theme

let cachedTheme = localStorage.getItem('cachedTheme');
let themeCss = document.getElementById('theme-sheet');
let currentTheme = "Pikachu";

const storeTheme = (theme) => localStorage.setItem('cachedTheme', theme);

const setTheme = (theme) => {
    cssPath = "./styles/theme"+theme+".css";
    themeCss.setAttribute("href", cssPath);
    storeTheme(theme);
    currentTheme = theme;
}

const checkTheme = () => {
    if (cachedTheme) {
    setTheme(cachedTheme);
    currentTheme = cachedTheme;
}else{
    setTheme("Pikachu");
}
}

checkTheme();
