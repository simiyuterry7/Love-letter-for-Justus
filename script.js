const button = document.getElementById("openLetter");
const welcome = document.querySelector(".welcome-screen");
const letter = document.querySelector(".letter-page");

button.addEventListener("click", () => {
    welcome.style.display = "none";
    letter.style.display = "flex";
    createHearts();
});


function createHearts(){

    const heartsContainer = document.querySelector(".hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
        heart.style.fontSize = (Math.random() * 20 + 20) + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 500);

}window.addEventListener("load", () => {

    const title = document.querySelector(".welcome-screen h1");

    title.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 2500,
            iterations: Infinity
        }
    );

});
