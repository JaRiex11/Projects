let mydata
fetch('data/classics.json')
    .then(response => response.json())
    .then(jsonData => mydata = jsonData);

document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', () => {
        document.getElementById('download').addEventListener('click', loadButton);
    });

    function loadButton() {
        console.log(mydata[0].bibliography.title);

        let child = document.createElement("p");
        let text = '';
        let br = document.createElement('br');

        for (let i = 0; i < 100; i++) {
            /*text += mydata[i].bibliography.title;
            text += '\n';*/
            child.innerHTML += '(' + mydata[i].bibliography.author.name + ') '
            child.innerHTML += mydata[i].bibliography.title + '<br>';
            console.log(mydata[i].bibliography.title);
            console.log("i = " + i);
        }
        console.log(child);
        //child.textContent = text;

        document.getElementById('first').appendChild(child);
    }

});