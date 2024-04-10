let fType;
let code;
const PI = 3.1415;
function figureTypeIs() {
    const select = document.querySelector('select');
    fType = select.value;

    console.log(fType);
    if (fType == "cube") {
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value');
        code.setAttribute('type', "text");
        code.setAttribute('placeholder', "Длина ребра");
        document.getElementById('values').appendChild(code);
    }
    if (fType == "cylinder") {
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value_rad');
        code.setAttribute('type', "text");
        code.setAttribute('placeholder', "Радиус");
        document.getElementById('values').appendChild(code);
        code = document.createElement('input');
        code.setAttribute('id', 'value_hight');
        code.setAttribute('type', "text");
        code.setAttribute('placeholder', "Высота");
        document.getElementById('values').appendChild(code);
    }
    if (fType == "ball") {
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value_rad');
        code.setAttribute('type', "text");
        code.setAttribute('placeholder', "Радиус");
        document.getElementById('values').appendChild(code);
    }
    if (fType == "pyramid") {
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value_square');
        code.setAttribute('type', "text");
        code.setAttribute('placeholder', "Площадь основания");
        document.getElementById('values').appendChild(code);
        code = document.createElement('input');
        code.setAttribute('id', 'value_hight');
        code.setAttribute('type', "text");
        code.setAttribute('placeholder', "Высота");
        document.getElementById('values').appendChild(code);
    }
    if (fType == "cone") {
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value_rad');
        code.setAttribute('type', "text");
        code.setAttribute('placeholder', "Радиус основания");
        document.getElementById('values').appendChild(code);
        code = document.createElement('input');
        code.setAttribute('id', 'value_hight');
        code.setAttribute('type', "text");
        code.setAttribute('placeholder', "Высота");
        document.getElementById('values').appendChild(code);
    }
}
let volume;
function solveVolume() {
    code = document.querySelector('p');
    code.remove();
    if (fType == 'cube') {
        let input = document.getElementById('value').value;
        if (input === "") {
            code.innerHTML = '<strong>Поле ввода не должно быть пустым!</strong>';
            document.getElementById('result').appendChild(code);
            return;
        }

        code = document.createElement('p');
        console.log(typeof (input));

        if (input < 0 || isNaN(input)) {
            code.innerHTML = '<strong>Введены некоректные данные!</strong>';
        } else {
            volume = input * input * input;
            code.innerHTML = volume;
        }

        document.getElementById('result').appendChild(code);
    }
    if (fType == 'cylinder') {
        let rad = document.getElementById('value_rad').value;
        let hi = document.getElementById('value_hight').value;
        code = document.createElement('p');
        if (rad === "" || hi === "") {
            code.innerHTML = '<strong>Поле ввода не должно быть пустым!</strong>';
            document.getElementById('result').appendChild(code);
            return;
        }
        console.log(typeof (input));
        if (rad < 0 || hi < 0 || isNaN(rad) || isNaN(hi)) {
            code.innerHTML = '<strong>Введены некоректные данные!</strong>';

        } else {
            volume = PI * rad * rad * hi;
            code.innerHTML = volume;
        }
        document.getElementById('result').appendChild(code);
    }
    if (fType == 'ball') {
        let rad = document.getElementById('value_rad').value;
        code = document.createElement('p');
        if (rad === "") {
            code.innerHTML = '<strong>Поле ввода не должно быть пустым!</strong>';
            document.getElementById('result').appendChild(code);
            return;
        }
        if (rad < 0 || isNaN(rad)) {
            code.innerHTML = '<strong>Введены некоректные данные!</strong>';

        } else {
            volume = 4 / 3 * PI * rad * rad * rad;
            code.innerHTML = volume;
        }
        document.getElementById('result').appendChild(code);
    }
    if (fType == 'pyramid') {
        let sqrt = document.getElementById('value_square').value;
        let hi = document.getElementById('value_hight').value;
        code = document.createElement('p');
        if (hi === "" || sqrt === "") {
            code.innerHTML = '<strong>Поле ввода не должно быть пустым!</strong>';
            document.getElementById('result').appendChild(code);
            return;
        }
        if (sqrt < 0 || hi < 0 || isNaN(sqrt) || isNaN(hi)) {
            code.innerHTML = '<strong>Введены некоректные данные!</strong>';

        } else {
            volume = 1 / 3 * sqrt * hi;
            code.innerHTML = volume;
        }
        document.getElementById('result').appendChild(code);
    }
    if (fType == 'cone') {
        let rad = document.getElementById('value_rad').value;
        let hi = document.getElementById('value_hight').value;
        code = document.createElement('p');
        if (rad === "" || hi === "") {
            code.innerHTML = '<strong>Поле ввода не должно быть пустым!</strong>';
            document.getElementById('result').appendChild(code);
            return;
        }
        if (rad < 0 || hi < 0 || isNaN(rad) || isNaN(hi)) {
            code.innerHTML = '<strong>Введены некоректные данные!</strong>';

        } else {
            volume = 1 / 3 * PI * rad * rad * hi;
            code.innerHTML = volume;
        }
        document.getElementById('result').appendChild(code);
    }
}
