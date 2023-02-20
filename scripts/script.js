// let isLs = false;
// let lsStatus;
// let currentLsTimes = document.getElementById('current-data-time');
// let lsLogo = document.getElementById('status-emoji').innerHTML;
// let powerStatus = document.getElementById('status-power').innerHTML;
// lsStatus = isLs == true ? lsStatus = "Down" : "Up";

// if (isLs == true) {
//     lsLogo = "🚫";
//     powerStatus = "OFF";
//     currentLsTimes.style.display = "inline";
// }else if(isLs == false){
//     lsLogo = "✅";
//     powerStatus = "ON";
//     currentLsTimes.style.display = "none";
// }


console.log(currentTheme);
let isLS = true;


if (isLs == true){
    logo = "🚫";
    gif = "./ressources/img/"+theme+"Sad.gif"
}else{
    logo = "✅";
    gif = "./ressources/img/"+theme+"Happy.gif"
}
