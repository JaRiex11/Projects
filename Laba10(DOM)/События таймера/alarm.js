let color;
let timerId
let delayNumber;
document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener('load', init);

    function init() {
        document.getElementById("go").addEventListener("click", okayKlick);
        document.getElementById("stop").addEventListener("click", stopKlick);
        document.getElementById("pause").addEventListener("click", pauseKlick);
        document.getElementById("stop2").addEventListener("click", stop2Klick);
        document.getElementById("start").addEventListener("click", startKlick);
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
        timerId = setInterval(function () {
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

    function pauseKlick() {
        console.log("pause!");
        document.getElementById("go").removeAttribute("disabled");
        clearInterval(timerId);
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

    let timer2;
    let array = [true, true, true, true, true, true, true, true, true, true];
    function startKlick() {
        delayNumber = document.getElementById("delay").value;
        console.log("старт");
        console.log(delayNumber);

        let rows = document.getElementsByClassName("row");
        timer2 = setInterval(hideElems, delayNumber, rows);
    }

    function stop2Klick() {
        clearInterval(timer2);
        console.log("пауза");
        let rows = document.getElementsByClassName("row");
        for (let i = 0; i < 10; i++) {
            //console.log(i);
            rows[i].style.visibility = "visible";
            array[i] = true;
        }
    }

    function hideElems(rows) {
        console.log("Старт таймера")
        for (let i = 0; i < 10; i++) {
            if (Math.random() > 0.5) {
                //console.log(rows[i]);
                if (array[i] === true) {
                    rows[i].style.visibility = "hidden";
                    array[i] = false;
                    //console.log("Попали в иф 1");
                } else {
                    rows[i].style.visibility = "visible";
                    array[i] = true;
                    //console.log("ELSE 2");
                }
            }
        }
    }

});