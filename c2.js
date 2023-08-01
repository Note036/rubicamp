function deretKaskus(n) {
    const deret = [];
    let l = n * 3;
    for(let i = 3; i <= l; i += 3) {
        if(i % 5 == 0 && i % 6 == 0) {
            deret.push("KASKUS")
        } else if(i % 5 == 0) {
            deret.push("KAS")
        } else if(i % 6 == 0) {
            deret.push("KUS")    
        } else {
            deret.push(i)
        }
        
    };
     
    return deret
}

 console.log(deretKaskus(10));