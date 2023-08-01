function stringManipulation(word) {
    const pisahKata = word.split(" ");
    const vokal = "aiueo";
    let txt = ""
    for(let i = 0; i < pisahKata.length; i++) {
        if(vokal.includes(pisahKata[i].charAt(0)) == true) {
            txt += pisahKata[i] + " ";
            console.log(pisahKata[i])
        };
        if(vokal.includes(pisahKata[i].charAt(0)) == false) {
            txt += pisahKata[i].slice(1) + pisahKata[i].charAt(0) + "nyo ";
        };
    }; 
    return console.log(txt);
};

stringManipulation("ibu pergi ke pasar bersama aku");

// let a = "ibu pergi ke pasar bersama aku";
// let b = a.split(" ");
// console.log(b)