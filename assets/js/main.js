function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBg() {
    let img = document.getElementById('bg-img');
    let radius = document.getElementsByClassName('radius');
    let num = getRandomInt(1, 6);
    img.src = "./assets/images/background/" + num + ".webp";
    radius[num].style.backgroundColor = "#fff";
    radius[num].style.width = "12px";
}

function getBgMColor() {
    let radius = document.getElementsByClassName('radius');
    for (const radius1 of radius) {
        radius1.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        radius1.style.width = "8px";
    }
}

(function () {
    console.log(
        "%c\n" +
        "            _______   ________ \n" +
        "     /\\    / ____\\ \\ / /  ____|\n" +
        "    /  \\  | (___  \\ V /| |__   \n" +
        "   / /\\ \\  \\___ \\  > < |  __|  \n" +
        "  / ____ \\ ____) |/ . \\| |____ \n" +
        " /_/    \\_\\_____//_/ \\_\\______|\n" +
        "                               \n" +
        "                               \n"
        , 'color:red');
    console.log('%cASXE的主页\nhttps://www.asxe.vip', 'color:green');
})();

document.addEventListener('DOMContentLoaded', () => {
    getBg();
    let bg = document.getElementById('bg')
    bg.style.width = `${document.body.clientWidth}`;
    bg.style.height = `${document.body.clientHeight - 150}`;
    setInterval(() => {
        getBgMColor();
        getBg();
    }, 5500);
});


let show1 = document.getElementById('show1');
let show2 = document.getElementById('show2');
let show3 = document.getElementById('show3');
let show4 = document.getElementById('show4');
let show5 = document.getElementById('show5');
let show6 = document.getElementById('show6');
let show7 = document.getElementById('show7');
let show8 = document.getElementById('show8');
let show9 = document.getElementById('show9');
let show10 = document.getElementById('show10');
let show11 = document.getElementById('show11');
let show12 = document.getElementById('show12');

show1.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-1').innerHTML;
});

show1.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show2.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-2').innerHTML;
});

show2.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show3.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-3').innerHTML;
});

show3.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show4.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-4').innerHTML;
});

show4.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show5.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-5').innerHTML;
});

show5.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show6.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-6').innerHTML;
});

show6.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show7.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-7').innerHTML;
});

show7.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show8.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-8').innerHTML;
});

show8.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show9.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-9').innerHTML;
});

show9.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show10.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-10').innerHTML;
});

show10.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show11.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-11').innerHTML;
});

show11.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});

show12.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById('show-content-12').innerHTML;
});

show12.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});


let right = document.getElementById('right');
right.addEventListener('mouseover', () => {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
});
right.addEventListener('mouseout', () => {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
});
