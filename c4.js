function indexPrim(param) {
    let count = 0;
    for (let i = 2; ; i++) {
        let cekParam = true;
        for (let j = 2; j < Math.sqrt(i); j++) {
            if (i % j == 0) cekParam = false
        }
        if (cekParam == true) count++
        if (count == param) return i
    }
}

console.log(indexPrim(4));
console.log(indexPrim(500));
console.log(indexPrim(37786));