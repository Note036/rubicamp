/*function cekPrimeNumber(n) {
    for(let i = 2; i < n; i++) {
        if(n % i == 0)
            return false
        };
            
    return true;
};*/

function indexPrime(param1) {
    const bilPrima = [];
    let batas = param1*20
    for(let i = 2; i < batas; i++){
        const cekPrimeNumber = (n) => {
            for(let i = 2; i < n; i++) {
                if(n % i == 0)
                    return false
                };
                    
            return true;
        }
        if(cekPrimeNumber(i) == true) {
            bilPrima.push(i)
        }
    }
    return bilPrima[param1-1]
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));

/*
function indexPrime(param1) {
    const bilPrima = [];
    let i = 2;
    while(bilPrima.length < param1) {
        const cekPrimeNumber = (n) => {
            for(let i = 2; i < n; i++) {
                if(n % i == 0)
                    return false;
                };
                    
            return true;
        };
        if(cekPrimeNumber(i)) {
            bilPrima.push(i);
        };
        i = i === 2 ? i + 1 : i + 2;
    };
    
    return bilPrima[param1-1];
};

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
*/