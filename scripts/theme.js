
let themeSheet = document.getElementById("theme-sheet");
let cachedTheme = localStorage.getItem('cachedTheme');

// function changeTheme 
// is called when user press a theme button, change theme css url
// store selection to local storage


function changeTheme(selection) {
    newLink = "./styles/theme"+selection+".css";
    themeSheet.setAttribute("href", newLink);
    localStorage.setItem('cachedTheme', selection);
}

function setTheme(theme) {
    switch (theme) {
        case 'Charmander':
            changeTheme(theme);
            break;
        case 'Squirtle':
            changeTheme(theme);
            break;
        default:
            changeTheme('Pikachu');
            break;
    }
}

window.onload = setTheme(cachedTheme);