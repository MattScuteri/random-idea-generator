let adjective = document.getElementById('adjective');

function getWords() {
    const api = "http://api.datamuse.com/words?rel_jjb=";
    const noun = document.getElementById("noun").value;

    
    var url = api + noun

    console.log(url);
    request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        let data = JSON.parse(this.response);
        console.log(data);

        let randomAdjective = data[Math.floor(Math.random()*data.length)];
        console.log(randomAdjective.word);
        document.getElementById("adjective").innerHTML = randomAdjective.word;
        document.getElementById("user-noun").innerHTML = noun;
    }
    request.send();
}