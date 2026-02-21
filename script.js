let messages = [
    "You are my favorite notification 😎📱",
    "I love you more than pizza 🍕❤️",
    "Smile! You make my day brighter 😁✨",
    "You + Me = 😍",
    "If you were a vegetable, you'd be a cute-cumber 🥒😂",
    "Your smile should be illegal 😜",
    "Warning: Hug incoming 🤗💖"
];

function showFunnyMessage() {
    let i = Math.floor(Math.random() * messages.length);
    let p = document.getElementById("funny-text");

    // Show message
    p.innerText = messages[i];

    // Animate text
    p.style.transform = "scale(1.3)";
    p.style.color = "#ff3399";
    setTimeout(() => {
        p.style.transform = "scale(1)";
        p.style.color = "#333";
    }, 300);

    // Optional: Confetti effect (later)
}