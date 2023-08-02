function indexPrime(param1) {
    let counter = 0;
    let cekPrimeNumber;
    
    for (let i = 2; ; i++) {
        cekPrimeNumber = true;
        for(let j = 2; j < Math.sqrt(i); j++) {
            if(i % j == 0) cekPrimeNumber = false 
        
        }
        if(cekPrimeNumber == true) counter++
        if(counter == param1) return i
    }
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
