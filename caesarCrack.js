let frq = new Map();
frq.set("e", 12.7)
   .set("t", 9.06)
   .set("a", 8.17)
   .set("o", 7.51)
   .set("i", 6.97)
   .set("n", 6.75)
   .set("s", 6.33)
   .set("h", 6.09)
   .set("r", 5.99)
   .set("d", 4.25)
   .set("l", 4.03)
   .set("c", 2.78)
   .set("u", 2.76)
   .set("m", 2.41)
   .set("w", 2.36)
   .set("f", 2.23)
   .set("g", 2.02)
   .set("y", 1.97)
   .set("p", 1.93)
   .set("b", 1.49)
   .set("v", 0.98)
   .set("k", 0.77)
   .set("x", 0.15)
   .set("j", 0.15)
   .set("q", 0.1)
   .set("z", 0.05);


function decode(word, Lkey) {
let coded = "";
for (let i = 0; i < word.length; i++) {
    coded += String.fromCharCode((word.charCodeAt(i) - 97 - Lkey + 26) % 26 + 97);
}
    return coded; 
}

function getActualFrqSums(word) {
let count;
let letterAmount = new Map();
let frqSum = 0;

for(let i = 0; i < word.length; i++) {
    if(!letterAmount.has(word[i])) {
    letterAmount.set(word[i], 0);
    }
    count = letterAmount.get(word[i]);
    letterAmount.set(word[i], count + 1);
}
for(let [k, v] of letterAmount) {
    letterAmount.set(k, v/word.length);
}
return letterAmount;  //частоты букв
}


function getOverallFrqDifference(letterFreq) {
let difference = 0;
for (let [l, a] of letterFreq) {
    difference += Math.abs((a*100) - frq.get(l));
}
return difference;
}

let codedWord = "nrymjgjxyuwtlwfrrjwnsymjbtwqi";
let minDiff = 1000;
let myKey = 0;

for(let i = 0; i < 26; i++) {
if(getOverallFrqDifference(getActualFrqSums(decode(codedWord, i))) < minDiff) {
    minDiff = getOverallFrqDifference(getActualFrqSums(decode(codedWord, i)));
    myKey = i;
}
}


console.log("\n", "Cracked key:", myKey, "\n", "Decoded message:", decode(codedWord, myKey));
