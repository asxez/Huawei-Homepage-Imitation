(function bodyImage() {
    let huawei = document.getElementById('huawei');
    let choice = document.getElementById('choice');
    let around = document.getElementById('around');
    huawei.addEventListener('click', () => {
       window.open('./index.html');
    });
    choice.addEventListener('click', () => {
       window.open('./choice.html');
    });
    around.addEventListener('click', () => {
       window.open('./around.html');
    });
    let bodyImg = document.getElementsByClassName('body-image');
    for (let i = 0;i < 8; i++) {
        bodyImg[i].style.width = `${document.body.clientWidth}`;
        bodyImg[i].style.height = `${document.body.clientHeight}`;
    }
})();
