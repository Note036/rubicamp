function stringManipulation(word) {
    let vokal = "aiueo";
    word.toLowerCase();
    if(vokal.includes(word.charAt(0)) == true) {
        return console.log(word);
    };
    if(vokal.includes(word.charAt(0)) == false) {
        return console.log(word.slice(1) + word.charAt(0) + "nyo");
    };
};

stringManipulation("ayam");
stringManipulation("bebek");


const nama = ["ninda","maya","nisa","nanda"];
let txt = "";
for(x of nama) {
    txt += x + "\n";
}
console.log(txt)