var randomAdjective;
var noun;

function getWords() {
    const api = "https://api.datamuse.com/words?rel_jjb=";
    const adjective = document.getElementById('adjective');
    const userNoun = document.getElementById('user-noun');

    noun = document.getElementById("noun").value;
    var url = api + noun

    request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        let data = JSON.parse(this.response);
        console.log(data);

        randomAdjective = data[Math.floor(Math.random()*data.length)];
        console.log(randomAdjective.word);

        document.getElementById('results-div').style.display = "block";
        adjective.innerHTML = randomAdjective.word;
        userNoun.innerHTML = noun;

        let idea = randomAdjective.word + noun;
        return idea;
    }
    request.send();
}