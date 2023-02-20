
isLS = true;

// this script manage theme changes, storing into cache and
// retrieve if there is a cached theme

let cachedTheme = localStorage.getItem('cachedTheme');
let themeCss = document.getElementById('theme-sheet');
let currentTheme = "Pikachu";

const storeTheme = (theme) => localStorage.setItem('cachedTheme', theme);

const setTheme = (theme) => {
    currentTheme = theme;
    cssPath = "./styles/theme"+theme+".css";
    themeCss.setAttribute("href", cssPath);
    storeTheme(theme);
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

// block bellow handle content html according LS status and current theme

function lsDisplay(lsLogo,lStatus,lsGif,lsTimesDisplay){
    document.getElementById("status-emoji").innerHTML = lsLogo;
    document.getElementById("illustrationGif").src = lsGif;
    document.getElementById("status-power").innerHTML = lStatus;
    document.getElementById('current-data-time').style.display = lsTimesDisplay;
}

function updateHTMLcontent(){
    if(isLS) {
        lsDisplay("🚫","OFF","./ressources/img/"+currentTheme+"Sad.gif","inline")
    }else if(isLS == null){
        lsDisplay("-","🤔","./ressources/img/NoData.gif","none")
    }else{
        lsDisplay("✅","ON","./ressources/img/"+currentTheme+"Happy.gif","none")
    }
};

updateHTMLcontent()

const clickChangeTheme = (theme) => {
    setTheme(theme);
    updateHTMLcontent()
}

console.log(isLS);
console.log(currentTheme);
