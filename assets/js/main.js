function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBg() {
    let img = document.getElementById('bg-img');
    let radius = document.getElementsByClassName('radius');
    let num = getRandomInt(1,6);
    img.src = "./assets/images/background/" + num + ".webp";
    radius[num].style.backgroundColor = '#fff';
}

function getBgMColor() {
    let radius = document.getElementsByClassName('radius');
    for (const radius1 of radius) {
        radius1.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getBg();
    setInterval(() => {
        getBgMColor();
        getBg();
    }, 5500);
});
