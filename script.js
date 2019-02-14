let adjective = document.getElementById('adjective');

function getWords() {
    let api = "http://api.datamuse.com/words?rel_jjb=";
    let noun = document.getElementById("noun").value;

    
    let url = api + noun

    console.log(url);
    request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        let data = JSON.parse(this.response);
        console.log(data);
    }
    request.send();
}