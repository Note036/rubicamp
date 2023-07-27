function weirdMultiple(sentence) {
    if(sentence < 10) {
        return sentence
    };
    
    const numToString = sentence.toString();
    const pisah = numToString.split("");
    let kali = 1;
     
    for(let i = 0; i < pisah.length; i++) {
        kali *= pisah[i]
    };  
    return weirdMultiple(kali);
};

console.log(weirdMultiple(39));
console.log(weirdMultiple(999));
console.log(weirdMultiple(3));
