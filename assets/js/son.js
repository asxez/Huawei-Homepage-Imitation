(function () {
    let huawei = document.getElementById('huawei');
    let car = document.getElementById('car');
    let choice = document.getElementById('choice');
    let around = document.getElementById('around');
    huawei.addEventListener('click', () => {
        window.open("./index.html");
    });
    car.addEventListener('click', () => {
        window.open("./car.html")
    });
    choice.addEventListener('click', () => {
       window.open('./choice.html');
    });
    around.addEventListener('click', () => {
       window.open('./around.html');
    });
})();
