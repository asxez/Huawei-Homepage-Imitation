function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBg() {
    let img = document.getElementById('bg-img');
    img.src = "./assets/images/background/" + getRandomInt(1,6) + ".webp";
}

document.addEventListener('DOMContentLoaded', () => {
    getBg();
    setInterval(getBg, 5500);
});
