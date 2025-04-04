const text = [
    "CS Student • Football Fanatic • Future Data Scientist"
];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
    const typedText = document.getElementById("typed-text");
    if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
        currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
        currentText = text[i].substring(0, j--);
    }
    typedText.innerHTML = currentText;

    let typingSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && j === text[i].length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }
    setTimeout(typeEffect, typingSpeed);
    }
}
typeEffect();