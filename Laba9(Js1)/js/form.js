let fType;
let code;
const PI = 3.1415;
function figureTypeIs() {
    const select = document.querySelector('select');
    fType = select.value;

    /*const figures = document.querySelectorAll('input[name="figure"]')
    
    for (const f of figures) {
        if (f.checked) {
            fType = f.value;
        }
    }*/
    console.log(fType);
    if (fType == "cube") {
        //code = '<input id="value" type="number" placeholder="Длина ребра">';
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value');
        code.setAttribute('type', "number");
        code.setAttribute('placeholder', "Длина ребра");
        document.getElementById('values').appendChild(code);
        //document.getElementById('values').innerHTML = code;
    }
    if (fType == "cylinder") {
        //code = '<input id="value_rad" type="number" placeholder="Радиус"><br><input id="value_hight" type="number" placeholder="Высота">';
        //document.getElementById('values').innerHTML = code;
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value_rad');
        code.setAttribute('type', "number");
        code.setAttribute('placeholder', "Радиус");
        document.getElementById('values').appendChild(code);
        code = document.createElement('input');
        code.setAttribute('id', 'value_hight');
        code.setAttribute('type', "number");
        code.setAttribute('placeholder', "Высота");
        document.getElementById('values').appendChild(code);
    }
    if (fType == "ball") {
        //code = '<input id="value_rad" type="number" placeholder="Радиус">';
        //document.getElementById('values').innerHTML = code;
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value_rad');
        code.setAttribute('type', "number");
        code.setAttribute('placeholder', "Радиус");
        document.getElementById('values').appendChild(code);
    }
    if (fType == "pyramid") {
        //code = '<input id="value_square" type="number" placeholder="Площадь основания"><br><input id="value_hight" type="number" placeholder="Высота">';
        //document.getElementById('values').innerHTML = code;
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value_square');
        code.setAttribute('type', "number");
        code.setAttribute('placeholder', "Площадь основания");
        document.getElementById('values').appendChild(code);
        code = document.createElement('input');
        code.setAttribute('id', 'value_hight');
        code.setAttribute('type', "number");
        code.setAttribute('placeholder', "Высота");
        document.getElementById('values').appendChild(code);
    }
    if (fType == "cone") {
        //code = '<input id="value_rad" type="number" placeholder="Радиус основания"><br><input id="value_hight" type="number" placeholder="Высота">';
        //document.getElementById('values').innerHTML = code;
        code = document.querySelectorAll('input');
        for (let i = 0; i < code.length; i++) {
            code[i].remove();
        }

        code = document.createElement('input');
        code.setAttribute('id', 'value_rad');
        code.setAttribute('type', "number");
        code.setAttribute('placeholder', "Радиус основания");
        document.getElementById('values').appendChild(code);
        code = document.createElement('input');
        code.setAttribute('id', 'value_hight');
        code.setAttribute('type', "number");
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
        code = document.createElement('p');
        if (input < 0) {
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
        if (rad < 0 || hi < 0) {
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
        if (rad < 0) {
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
        if (sqrt < 0 || hi < 0) {
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
        if (rad < 0 || hi < 0) {
            code.innerHTML = '<strong>Введены некоректные данные!</strong>';

        } else {
            volume = 1 / 3 * PI * rad * rad * hi;
            code.innerHTML = volume;
        }
        document.getElementById('result').appendChild(code);
    }
}
