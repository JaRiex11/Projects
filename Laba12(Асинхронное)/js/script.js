let mydata;
fetch('data/classics.json')
    .then(response => response.json())
    .then(jsonData => mydata = jsonData);

document.addEventListener('DOMContentLoaded', () => {

    let astroIterator;

    window.addEventListener('load', () => {
        document.getElementById('download').addEventListener('click', loadButton); // книжки
        document.getElementById('loadAstro').addEventListener('click', astroLoad);
    });

    function loadButton() { //книги и их авторы
        console.log(mydata[0].bibliography.title);

        let child = document.createElement("ol");

        for (let i = 0; i < 50; i++) {
            let child2 = document.createElement('li');
            let child3 = document.createElement('p');

            child3.innerHTML += '(' + mydata[i].bibliography.author.name + ') '
            child3.innerHTML += mydata[i].bibliography.title;
            console.log(mydata[i].bibliography.title);
            console.log("i = " + i);
            child2.appendChild(child3) //li
            child2.setAttribute('id', i);
            child2.addEventListener('click', urlout);
            child.appendChild(child2);//ol
        }
        console.log(child);

        document.getElementById('first').appendChild(child);
    }

    let lastIndexOfSelected = -1;

    function urlout() {
        console.log(this.id);
        this.setAttribute('class', 'selected');
        if(lastIndexOfSelected !== -1){
            document.getElementById(lastIndexOfSelected).removeAttribute('class');
        }
        

        let superChild = document.createElement('ul');
        superChild.setAttribute('id', 'info-container');
        let child = document.createElement('p');
        child.innerHTML += "Информация о выбранной книге:" + '<br>';
        child.innerHTML += "Ссылка на gutenberg.org:" + '<br>';
        child.innerHTML += mydata[this.id].metadata.url + '<br>';;
        child.innerHTML += "Статистика:" + '<br>' + "Количество слов: " + mydata[this.id].metrics.statistics.words + '<br>';
        child.innerHTML += "Количество символов: " + mydata[this.id].metrics.statistics.characters + '<br>';
        child.innerHTML += "Количество предложений: " + mydata[this.id].metrics.statistics.sentences + '<br>';
        
        if(lastIndexOfSelected !== -1){
            document.getElementById('url-container').removeChild(document.getElementById('info-container'));
        } else {
            document.getElementById('url-container').removeChild(document.getElementById('infoAboutBook'));
        }
        superChild.appendChild(child);
        document.getElementById('url-container').appendChild(superChild);

        lastIndexOfSelected = this.id;

    }

    function astroLoad() {
        console.log(mydata.length);
        astroIterator = 10;
        outputAstro();
    }

    function outputAstro() {
        let child = document.createElement("p");
        child.setAttribute('id', 'astronauts');

        for (let i = astroIterator - 10; i < astroIterator; i++) {
            child.innerHTML += (i + 1) + ': ' + mydata[i].bibliography.author.name + '<br>';
            console.log("i = " + i);
        }

        document.getElementById('astro-container').appendChild(child);
        let but1 = document.createElement('button');
        but1.setAttribute('id', "lastPage");
        
        but1.addEventListener('click', lastPage);
        but1.textContent = "Назад";
        if(astroIterator <= 10){
            but1.setAttribute('disabled', 'disabled');
        } else {
            but1.removeAttribute('disabled');
        }

        let but2 = document.createElement('button');
        but2.setAttribute('id', "nextPage");
        but2.addEventListener('click', nextPage);
        but2.textContent = 'Вперёд';
        if(astroIterator >= mydata.length){
            but2.setAttribute('disabled', 'disabled');
        } else {
            but2.removeAttribute('disabled');
        }

        document.getElementById('astro-container').appendChild(but1);
        document.getElementById('astro-container').appendChild(but2);
    }

    function lastPage() {
        astroIterator -= 10;
        let cont = document.getElementById('astro-container');
        let child = document.getElementById('astronauts');
        cont.removeChild(child);
        cont.removeChild(document.getElementById('nextPage'));
        cont.removeChild(document.getElementById('lastPage'));
        outputAstro();
    }

    function nextPage() {
        astroIterator += 10;
        let cont = document.getElementById('astro-container');
        let child = document.getElementById('astronauts');
        cont.removeChild(child);
        cont.removeChild(document.getElementById('nextPage'));
        cont.removeChild(document.getElementById('lastPage'));
        outputAstro();
    }

});