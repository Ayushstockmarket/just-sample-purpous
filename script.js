const body = document.querySelector("body");
const modeSelect = document.querySelector("#modes");
const fontSizeSelect = document.querySelector("#text_size");
let fontSize;
let mode;
let storeLocalStorage;
function toggleModes() {
 
  modeSelect.addEventListener("change", (event) => {
    mode = event.target.value;
    setLocalStorage();
    if (mode === "Dark") {
      body.classList.add("Dark");
      body.classList.remove("light");
    } else if (mode == "Light") {
      body.classList.add("light");
      body.classList.remove("Dark");
    } else {
      console.log("Please Refresh The Page Buddy");
    }
    getLocalStorage();
  });
  
}

function changeFontSize() {
  fontSizeSelect.addEventListener("change", (event) => {
    fontSize = event.target.value;
    body.style.fontSize = fontSize;
    setLocalStorage(); // Save font size to localStorage
  });
}
window.addEventListener("load", () => {
  getLocalStorage();
  toggleModes();
  changeFontSize();
});

// Save values to localStorage
function setLocalStorage() {
  const settings = {
    mode: mode || "light", // Default to light
    fontSize: fontSize || "16px", // Default font size
  };
  localStorage.setItem("pageSettings", JSON.stringify(settings));
}
function getLocalStorage() {
  storeLocalStorage = JSON.parse(localStorage.getItem("pageSettings"));
  mode = storeLocalStorage.mode;
  fontSize = storeLocalStorage.fontSize;
  if (mode === "Dark") {
    body.classList.add("Dark");
    body.classList.remove("light");
  } else if (mode == "Light") {
    body.classList.add("light");
    body.classList.remove("Dark");
  } else {
    console.log("Please Refresh The Page Buddy");
  }
  body.style.fontSize = fontSize;
}
