(function bodyImage() {
    let huawei = document.getElementById('huawei');
    let car = document.getElementById('car');
    let choice = document.getElementById('choice');
    huawei.addEventListener('click', () => {
       window.open('./index.html');
    });
    car.addEventListener('click', () => {
       window.open('./car.html');
    });
    choice.addEventListener('click', () => {
       window.open('./choice.html');
    });
    let bodyImg = document.getElementsByClassName('body-image');
    bodyImg[0].style.width = `${document.body.clientWidth}`;
    bodyImg[0].style.height = `${document.body.clientHeight}` - 100;
})();
