function stringManipulation(param) {
    let txt = "";
    if(/^[aiueo]/.test(param)) return console.log(param)
    else return console.log(param.slice(1) + param[0] + "nyo")
}

stringManipulation("ayam");
stringManipulation("babi");