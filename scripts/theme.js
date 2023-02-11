
let themeSheet = document.getElementById("theme-sheet");
let cachedTheme = localStorage.getItem('cachedTheme');
var currentTheme;

// function changeTheme 
// is called when user press a theme button, change theme css url accordingly
// store selection to local storage


function changeTheme(selection) {
    newLink = "./styles/theme"+selection+".css";
    themeSheet.setAttribute("href", newLink);
    localStorage.setItem('cachedTheme', selection);
}

// function setTheme 
// is called onload
// set theme to local storage value or pika by default

function setTheme(theme) {
    switch (theme) {
        case 'Charmander':
            changeTheme(theme);
            currentTheme = 'Charmander';
            break;
        case 'Squirtle':
            changeTheme(theme);
            currentTheme = 'Squirtle';
            break;
        default:
            changeTheme('Pikachu');
            currentTheme = "Pikachu"
            break;
    }
}

window.onload = setTheme(cachedTheme);