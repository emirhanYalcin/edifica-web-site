// Simple log to show JS is loaded (can be used for further enhancements)
console.log("Welcome to Edifica's site!");

document.getElementById("colorButton").addEventListener("click", () => {
    const teamSection = document.getElementById("team");

    // Generate random RGB colors
    const randomBg = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
    const randomText = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;

    // Apply them with smooth transition
    teamSection.style.backgroundColor = randomBg;
    teamSection.style.color = randomText;
});

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
