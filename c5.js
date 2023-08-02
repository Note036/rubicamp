function stringManipulation(word) {
    let vokal = "aiueo";
    if (/^[aiueo]/.test(word))
        return console.log(word);

    else if (vokal.includes(word.charAt(0)) == false)
        return console.log(word.slice(1) + word.charAt(0) + "nyo");
};

stringManipulation("ayam");
stringManipulation("bebek");
