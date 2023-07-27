function deretKaskus(n) {
    const deret = [];
    for(let i = 0; i < n; i++) {
        deret[i] = (i+1) * 3;

        if(deret[i] % 5 == 0 && deret[i] % 6 == 0) {
            deret[i] = "KASKUS"
        };
        if(deret[i] % 5 == 0) {
            deret[i] = "KAS"
        };
        if(deret[i] % 6 == 0) {
            deret[i] = "KUS"    
        };
        
    };
     
    return deret;
}

 console.log(deretKaskus(10));