//challange 1:Age in days

function ageInDays(){
    var birthYear = prompt("When were you born?");
    var days = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var Answer = document.createTextNode("You are " + days + " days old.");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(Answer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}