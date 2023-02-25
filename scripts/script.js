
isLS = true;

// this script manage theme changes, storing into cache and
// retrieve if there is a cached theme

let cachedTheme = localStorage.getItem('cachedTheme');
let themeCss = document.getElementById('theme-sheet');
let currentTheme;

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


// Get the table body
const tableBody = document.querySelector('#weather-table tbody');

// Get the current date
const today = new Date();

// Loop through the next 7 days
for (let i = 1; i <= 7; i++) {
  // Create a new date object for the current day in the loop
  const date = new Date(today.getTime() + (i * 24 * 60 * 60 * 1000));

  // Create a new table row
  const row = document.createElement('tr');

  // Determine the background color based on whether the row is even or odd
  if (i % 2 === 0) {
    row.style.backgroundColor = '#e4e0e0';
  }

  // Create the cells for the row
  const dateCell = document.createElement('td');
  const weatherCell = document.createElement('td');

  // Set the content of the cells
  dateCell.textContent = date.toISOString().slice(0,10)+" "+"("+date.toLocaleString('en-US', { weekday: 'long' }) + ')';
  weatherCell.textContent = '[Weather forecast for ' + date.toLocaleString('en-US', { weekday: 'long' }) + ']';

  // Add the cells to the row
  row.appendChild(dateCell);
  row.appendChild(weatherCell);

  // Add the row to the table body
  tableBody.appendChild(row);
}
