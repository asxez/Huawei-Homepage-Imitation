(function bodyImage() {
    let huawei = document.getElementById('huawei');
    huawei.addEventListener('click', () => {
        window.open('./index.html');
    });
    let bodyImg = document.getElementsByClassName('body-image');
    for (let i = 0; i < 8; i++) {
        bodyImg[i].style.width = `${document.body.clientWidth}`;
        bodyImg[i].style.height = `${document.body.clientHeight}`;
    }
})();
