function deretKaskus(n) {
    let deret = [], batas = n * 3
    for (let i = 3; i <= batas; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) deret.push("KasKus")
        else if (i % 5 == 0) deret.push("Kas")
        else if (i % 6 == 0) deret.push("Kus")
        else deret.push(i)
    } return deret
}

console.log(deretKaskus(10))