function getRandomInt(min, max) {
    //获取从min 到 max 的随机整数
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBg() {
    //替换背景大图的src属性，即更换图片
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

function listen() {
    let car = document.getElementById('car');
    let choice = document.getElementById('choice');
    let around = document.getElementById('around');
    car.addEventListener('click', () => {
        window.open("./car.html")
    });
    choice.addEventListener('click', () => {
        window.open('./choice.html');
    });
    around.addEventListener('click', () => {
        window.open('./around.html');
    });

    for (let j = 1; j < 13; j++) {
        let son = document.getElementById(`son-${j}`);
        son.addEventListener('click', () => {
            window.open(`./son-${j}.html`);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getBg();
    listen();
    let bg = document.getElementById('bg')
    bg.style.width = `${document.body.clientWidth}`;
    bg.style.height = `${document.body.clientHeight - 150}`;
    setInterval(() => {
        getBgMColor();
        getBg();
    }, 5000);
});

function mouseover(id) {
    document.getElementById('right').style.visibility = 'visible';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'visible';
    show_content.innerHTML = document.getElementById(id).innerHTML;
    document.getElementById('right').addEventListener('mouseover', () => {
        show_content.style.backgroundColor = "#fff";
        show_content.style.visibility = 'visible';
    });
}
function mouseout() {
    document.getElementById('right').style.visibility = 'hidden';
    let show_content = document.getElementById('show-content');
    show_content.style.visibility = 'hidden';
    document.getElementById('right').addEventListener('mouseout', () => {
        show_content.style.visibility = 'hidden';
    });
}
for (let i = 1; i <= 10; i++) {
    let show = document.getElementById(`show${i}`);
    show.addEventListener("mouseover", () => {
        mouseover(`show-content-${i}`);
    });
    show.addEventListener("mouseout", () => {
        mouseout();
    });
}
