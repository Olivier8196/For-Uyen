const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const result = document.getElementById("result");
const bgMusic = document.getElementById("bgMusic");

// Make "No" button dodge
function moveNo() {
    const x = Math.random() * (window.innerWidth - 140); // buffer
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

// On "Yes" click
yesBtn.addEventListener("click", () => {
    document.getElementById("card").style.display = "none";
    result.style.display = "flex";

    // Fade in result
    let opacity = 0;
    const fade = setInterval(() => {
        opacity += 0.05;
        result.style.opacity = opacity;
        if(opacity >= 1) clearInterval(fade);
    }, 20);

    // Unmute and play music
    bgMusic.muted = false;
    bgMusic.play().catch(err => console.log("Autoplay blocked?", err));
});
