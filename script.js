function getWords() {
    const api = "http://api.datamuse.com/words?rel_jjb=";
    const noun = document.getElementById("noun").value;
    let adjective = document.getElementById('adjective');
    let userNoun = document.getElementById('user-noun');
    
    var url = api + noun

    request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        let data = JSON.parse(this.response);
        console.log(data);

        let randomAdjective = data[Math.floor(Math.random()*data.length)];
        console.log(randomAdjective.word);

        document.getElementById('results-div').style.display = "block";
        adjective.innerHTML = randomAdjective.word;
        userNoun.innerHTML = noun;
    }
    request.send();
}