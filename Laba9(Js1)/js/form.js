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
    if(fType == "cube"){
        code = '<input id="value" type="number" placeholder="Длина ребра">';
        document.getElementById('values').innerHTML = code;
    }
    if(fType == "cylinder"){
        code = '<input id="value_rad" type="number" placeholder="Радиус"><br><input id="value_hight" type="number" placeholder="Высота">';
        document.getElementById('values').innerHTML = code;
    }
    if(fType == "ball"){
        code = '<input id="value_rad" type="number" placeholder="Радиус">';
        document.getElementById('values').innerHTML = code;
    }
    if(fType == "pyramid"){
        code = '<input id="value_square" type="number" placeholder="Площадь основания"><br><input id="value_hight" type="number" placeholder="Высота">';
        document.getElementById('values').innerHTML = code;
    }
    if(fType == "cone"){
        code = '<input id="value_rad" type="number" placeholder="Радиус основания"><br><input id="value_hight" type="number" placeholder="Высота">';
        document.getElementById('values').innerHTML = code;
    }
}
let volume;
function solveVolume() {
    
    if(fType == 'cube'){
        let input = document.getElementById('value').value;
        console.log(input);
        volume = input * input * input;
        code = '<p>' + volume + '</p>'
        document.getElementById('result').innerHTML = code;
    }
    if(fType == 'cylinder'){
        let rad = document.getElementById('value_rad').value;
        let hi = document.getElementById('value_hight').value;
        volume = PI * rad * rad * hi;
        code = '<p>' + volume + '</p>'
        document.getElementById('result').innerHTML = code;
    }
    if(fType == 'ball'){
        let rad = document.getElementById('value_rad').value;
        volume = 4 / 3 * PI * rad * rad * rad;
        code = '<p>' + volume + '</p>'
        document.getElementById('result').innerHTML = code;
    }
    if(fType == 'pyramid'){
        let sqrt = document.getElementById('value_square').value;
        let hi = document.getElementById('value_hight').value;
        volume = 1 / 3 * sqrt * hi;
        code = '<p>' + volume + '</p>'
        document.getElementById('result').innerHTML = code;
    }
    if(fType == 'cone'){
        let rad = document.getElementById('value_rad').value;
        let hi = document.getElementById('value_hight').value;
        volume = 1 / 3 * PI * rad * rad * hi;
        code = '<p>' + volume + '</p>'
        document.getElementById('result').innerHTML = code;
    }
}
