document.addEventListener("DOMContentLoaded", () => {
    let themeColor;

    console.log(themeColor);

    window.addEventListener('load', init);

    function init() {
        document.getElementById("lightTheme").addEventListener('click', light);
        document.getElementById("darkTheme").addEventListener('click', dark);
        document.getElementById('clearTheme').addEventListener('click', clearTheme);
        if(localStorage.getItem("themeColor") !== "light" || localStorage.getItem("themeColor") !== "dark"){
            switchTheme();
        }

        let child = document.getElementById('text');

        let geo = navigator.geolocation;
        if (geo in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                child.textContent = "Данные геолокации:" + "\n"+ "Долгота:" + position.coords.longitude + '\n' + "Широта;" + position.coords.latitude;
            });
        } else {
            console.log("попали в else");
            child.textContent = "Доступ к геолокации отсутствует";
        }


    }

    function light() {
        console.log("light");
        themeColor = 'light';
        localStorage.clear("themeColor");
        localStorage.setItem("themeColor", 'light');
        switchTheme();
    }

    function dark() {
        console.log("dark");
        themeColor = 'dark';
        localStorage.clear("themeColor");
        localStorage.setItem("themeColor", 'dark');
        switchTheme();
    }

    function switchTheme() {
        console.log("switch");
        themeColor = localStorage.getItem("themeColor");
        if(themeColor == "dark"){
            document.documentElement.setAttribute('data-theme', "dark");
        } else if(themeColor == "light"){
            document.documentElement.removeAttribute('data-theme');
        } 
    }

    function clearTheme() {
        console.log("clear");
        //document.documentElement.removeAttribute('data-theme');
        localStorage.clear("themeColor");
    }

});