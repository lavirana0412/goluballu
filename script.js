let messages = [
    "You are my naina😎📱",
    "I love you more than malai chaap 🍕❤️",
    "Smile! You make my day brighter 😁✨",
    "You + Me = 😍",
    "If you were a vegetable, you'd be a cute-cumber 🥒😂",
    " aur guggu muggu 😜",
    "your eyes baby your eyes"
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
