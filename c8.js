function pola(str) {
    
    const strToArr = str.split(" ");
    let x = strToArr[0];
    let y = strToArr[2];
    let z = strToArr[4];
    const arrResult = [];

    for(let i = 0; i <= 9; i++) {
        for(let j = 0; j <= 9; j++) {
            let zBaru = z.replace("#", i);
            let xBaru = x.replace("#", j);   
            if(xBaru * y == zBaru) {
                arrResult.push(j);
                arrResult.push(i);
                return arrResult
            }
             
            }; 

     }     
   
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));

