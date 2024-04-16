var N = parseInt(Math.random() * 10) + 2;
var flag = false;
var timer;
var timer2;
document.addEventListener("DOMContentLoaded", () => {
    // Узлы DOM уже доступны для манипуляций.

    // функция будет вызвана один раз после полной загрузки страницы
    window.addEventListener('load', init);
    // здесь нет доступа к элементам DOM, страница еще не загружена

    function init() {
        document.getElementById("start").addEventListener("click", okayKlick);
        document.getElementById("stop").addEventListener("click", stopKlick);
    }

    //let par = document.getElementById("rectanglearea");
    for (let i = 0; i < N; i++) {
        let child1 = document.createElement("p");
        child1.setAttribute("class", "rectangle");
        child1.style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ")";
        child1.style.top = parseInt(Math.random() * 400) + "px";
        child1.style.left = parseInt(Math.random() * 550) + "px";

        document.getElementById("rectanglearea").appendChild(child1);
    }



    function okayKlick() {
        console.log("okayKlick is started");
        document.getElementById("start").setAttribute("disabled", "");
        flag = true;
        timer = setInterval(setRdmColor, 1000);
    }

    function stopKlick() {
        console.log("stopKlick is started");
        if (flag = true) {
            console.log("Попали в цикл");
            clearInterval(timer);
            document.getElementById("start").removeAttribute("disabled");
        }
        flag = false;
    }

    function setRdmColor() {
        let blocks = document.getElementsByClassName('rectangle');
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ")";
        }
    }

    let blocks = document.getElementsByClassName('rectangle');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener("click", removeRect);
        blocks[i].addEventListener("mouseover", mouseIn);
        blocks[i].addEventListener("mouseout", mouseOut);
    }

    function removeRect() {
        this.remove();
    }

    function mouseIn() {
        timer2 = setInterval(rotRect, 1000, this);
    }
    let i = 1;
    function mouseOut() {
        clearInterval(timer2);
        this.style.rotate = 0 + "deg";
        i = 1;
    }

    function rotRect(let) {
        let.style.rotate = 10 * i + "deg";
        i++;
        if (i > 361) i = 1;
        //console.log("i = " + i);
    }
});

