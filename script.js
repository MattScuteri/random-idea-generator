let adjective = document.getElementById('adjective');
let noun = document.getElementById('noun').value;
let api = "api.datamuse.com/words?rel_jjb=";

let url = api + noun;

function getWords() {
    const request = new XMLHttpRequest();

    request.open('GET', url, true);

    request.onload = function(data) {
        console.log(data);
    }

    request.send();
}