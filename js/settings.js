// settings.js
// Hardcoded settings that will override localStorage values
const hardcodedSettings = {
    dark: JSON.stringify({ "background": "#17171a", "foreground": "#91949c", "accent": "#81a1c1" }),
    light: JSON.stringify({ "background": "#f5f5f5", "foreground": "#404040", "accent": "#5E81AC" }),
    name: "John",
    theme: "dark",
    header: "shown",
    weather: JSON.stringify({ "key": "305db780ddc1fde2753e7a1d422f68ee", "city": "Indianapolis", "tempUnit": "F" })
};

// Function to set localStorage values
function setLocalStorageSettings() {
    Object.keys(hardcodedSettings).forEach((key) => {
        localStorage.setItem(key, hardcodedSettings[key]);
    });
}

// Run the function immediately on page load
document.addEventListener("DOMContentLoaded", setLocalStorageSettings);
