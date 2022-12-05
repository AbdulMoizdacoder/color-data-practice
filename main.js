// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}
// MENU FUNCTIONS
function allColors() {
  outputEl.innerHTML = "<h3>DISPLAY ALL COLORS</h3>"
  for(let i = 0; i < colorData.length; i++){
// Display Name and Family of All Colors
  outputEl.innerHTML +=
`<h3>
  name:${colorData[i].name}
  family:${colorData[i].family}
  hex:${colorData[i].hex}
  r:${colorData[i].r}
  g:${colorData[i].g}
  b:${colorData[i].b}
  brightness:${colorData[i].brightness}
</h3>` ;
}

 
}

function brightColors() {
  outputEl.innerHTML = '';
  outputEl.innerHTML = "<h3>DISPLAY ALL BRIGHT COLORS</h3>"

  for(let i = 0; i < colorData.length; i++){
    if(colorData[i].brightness >= 200){
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
  outputEl.innerHTML += 
`<h3> 
  name:${colorData[i].name}
  family:${colorData[i].family}
  hex:${colorData[i].hex}
  r:${colorData[i].r}
  g:${colorData[i].g}
  b:${colorData[i].b}
  brightness:${colorData[i].brightness}
</h3>`;
  }
}
}
function redPinkFamilies() {
  outputEl.innerHTML = '';
  outputEl.innerHTML = "<h3>DISPLAY ALL RED/PINK FAMILY COLORS</h3>"
  for(let i = 0; i < colorData.length; i++){
   if(colorData[i].family === "Red" || colorData[i].family === "Pink"){
    // Count Colors in Red/Pink Families
    outputEl.innerHTML += 
    `<h3> 
      name:${colorData[i].name}
      family:${colorData[i].family}
      hex:${colorData[i].hex}
      r:${colorData[i].r}
      g:${colorData[i].g}
      b:${colorData[i].b}
      brightness:${colorData[i].brightness}
    </h3>`;
    }
  }
 
}
function familySearch() {
  outputEl.innerHTML = '';
  outputEl.innerHTML = "<h3>FAMILY SEARCH</h3>"
  let description = prompt("enter a family name");
  let count = 0;
  for(let i = 0; i < colorData.length; i++){
  if(colorData[i].family === description){
      // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML +=
  `<h3> 
    name:${colorData[i].name}
    family:${colorData[i].family} 
    hex:${colorData[i].hex}
    r:${colorData[i].r}
    g:${colorData[i].g}
    b:${colorData[i].b}
    brightness:${colorData[i].brightness}
  </h3>`
  count++;
  };
  }
 outputEl.innerHTML+= `<P> Total Colors in Family : ${count}</p>`;
  
}
function startLetterSearch() {
  outputEl.innerHTML = '';
  outputEl.innerHTML = "<h3>LETTER SEARCH</h3>"
  let description = prompt("enter the first letter of a color");
  let colorCount = 0;
  for(let i = 0; i < colorData.length; i++){
  if(colorData[i].name[0] === description){
      // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML +=
  `<h3> 
    name:${colorData[i].name}
    family:${colorData[i].family}
    hex:${colorData[i].hex}
    r:${colorData[i].r}
    g:${colorData[i].g}
    b:${colorData[i].b}
    brightness:${colorData[i].brightness}
  </h3>`;
   colorCount++;
  };
 
  }
  outputEl.innerHTML+= `<p> Total Colors in with starting letter : ${colorCount}</p>`
}
