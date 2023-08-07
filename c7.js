function weirdMultiple(n) {
    if (n < 10) return n
    let result = 1;
    const num = n.toString()
    for (let x of num) result *= x
    return weirdMultiple(result)
}

console.log(weirdMultiple(39));
console.log(weirdMultiple(999));
console.log(weirdMultiple(3));