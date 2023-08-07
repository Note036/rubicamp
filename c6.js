function sentenceManipulation(sentence) {
    const kalimat = [], kata = sentence.split(" ")
    for(let i = 0; i < kata.length; i++) {
        if(/^[aiueo]/.test(kata[i])) kalimat.push(kata[i])
        else kalimat.push(kata[i].slice(1) + kata[i][0] +"nyo")
    } console.log(kalimat.join(" "))
}

sentenceManipulation("ibu pergi ke pasar bersama aku")