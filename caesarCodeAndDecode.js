function code(word, Lkey) {
    let coded = "";
    for (let i = 0; i < word.length; i++) {
        coded += String.fromCharCode((word.charCodeAt(i) - 97 + Lkey) % 26 + 97);
    }
    return coded;
  }

  function decode(word, Lkey) {
    let coded = "";
    for (let i = 0; i < word.length; i++) {
        coded += String.fromCharCode((word.charCodeAt(i) - 97 - Lkey + 26) % 26 + 97);
    }
        return coded; 
    }

console.log(code("imthebestprogrammerintheworld", 5));

console.log(decode("nrymjgjxyuwtlwfrrjwnsymjbtwqi", 5));
