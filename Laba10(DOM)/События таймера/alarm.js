let color;
document.addEventListener("DOMContentLoaded", () => {
    // Узлы DOM уже доступны для манипуляций.

    // функция будет вызвана один раз после полной загрузки страницы
    window.addEventListener('load', init);
    // здесь нет доступа к элементам DOM, страница еще не загружена

    function init() {
        document.getElementById("go").addEventListener("click", okayKlick);
        document.getElementById("stop").addEventListener("click", stopKlick);
        document.getElementById("pause").addEventListener("click", pauseKlick);
    }

    function okayKlick() {
        document.body.style.backgroundColor = "";
        document.getElementById("go").setAttribute("disabled", "true");
        let min = document.getElementById("min").value;
        let i = document.getElementById("sec").value;
        console.log(i);
        if (i == 0 && min == 0) {
            console.log("stop!"); //остановка
            color = document.getElementById("color").value;
            document.body.style.backgroundColor = color;
            document.getElementById("go").removeAttribute("disabled");
            return;
        }
        let timerId = setInterval(function () {
            if (i <= 0) {
                if (min <= 0) {
                    console.log("stop!"); //остановка
                    document.getElementById("go").removeAttribute("disabled");
                    color = document.getElementById("color").value;
                    document.body.style.backgroundColor = color;

                    clearInterval(timerId);
                    document.getElementById("sec").value = 0;
                    console.log("0!");
                } else {
                    min--;
                    document.getElementById("min").value = min;
                    i = 59;
                    document.getElementById("sec").value = 59;
                    console.log(min + " : 0...");
                }
            } else {
                console.log(min + " : " + i + "...");
                document.getElementById("sec").value = i;
                i--;

            }
        }, 1000);
    }

    function stopKlick() {
        console.log("stop!"); //остановка
        document.getElementById("go").removeAttribute("disabled");
        color = document.getElementById("color").value;
        document.body.style.backgroundColor = "";

        clearInterval(timerId);
        document.getElementById("sec").value = 0;
        document.getElementById("min").value = 0;
        console.log("0!");
    }

});