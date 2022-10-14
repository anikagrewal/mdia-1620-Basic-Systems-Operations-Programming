var day = "sunny";
day = "rainy";
day = "snowy";

console.log(day);
var sentence = `The day today was ${day}.`;
console.log(sentence);

console.log(sentence.replace(/snow/i, "windy"));