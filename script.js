let messages = [
    "You are my guggu muggu 😎📱",
    "I love you more than malai chaap ❤️",
    "Smile! You make my day brighter 😁✨",
    "You + Me = 😍",
    "If you were a vegetable, you'd be a cute-cumber 🥒😂",
    "Your smile should be illegal 😜",
    "your eyes baby those eyes 💖",
    "will you be my naina?😢",
    "Roses are red 🌹, violets are blue 💙, sugar is sweet 🍬, and so are you 💖"
];

function showFunnyMessage() {
    let i = Math.floor(Math.random() * messages.length);
    let p = document.getElementById("funny-text");

    p.innerText = messages[i];

    // Animate text
    p.style.transform = "scale(1.3)";
    p.style.color = "#ff0066";
    setTimeout(() => {
        p.style.transform = "scale(1)";
        p.style.color = "#ff0066";
    }, 300);
}

// Floating hearts, stars, moon
function createFloatingIcon(icon, className) {
    let container = document.getElementById('floating-container');
    let span = document.createElement('span');
    span.innerText = icon;
    span.className = className;
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = (15 + Math.random() * 25) + "px";
    span.style.animationDuration = (4 + Math.random() * 3) + "s";
    container.appendChild(span);
    setTimeout(() => { span.remove(); }, 7000);
}

// Continuously spawn floating icons
setInterval(() => {
    let random = Math.random();
    if(random < 0.4) createFloatingIcon("💖", "floating-heart");
    else if(random < 0.7) createFloatingIcon("⭐", "floating-star");
    else createFloatingIcon("🌙", "floating-moon");
}, 500);
