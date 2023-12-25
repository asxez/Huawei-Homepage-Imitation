(function bodyImage() {
    let huawei = document.getElementById('huawei');
    let car = document.getElementById('car');
    let around = document.getElementById('around');
    huawei.addEventListener('click', () => {
       window.open('./index.html');
    });
    car.addEventListener('click', () => {
       window.open('./car.html');
    });
    around.addEventListener('click', () => {
       window.open('./around.html');
    });
    let bodyImg = document.getElementsByClassName('body-image');
    bodyImg[0].style.width = `${document.body.clientWidth}`;
    bodyImg[0].style.height = `${document.body.clientHeight}` - 100;
})();
