const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, prompt: "Tebakan: "
});

const data = fs.readFileSync("./data.json", "utf-8");

const obj = JSON.parse(data);
obj[2] = {"definition": "Sebutkan kota yang memiliki julukan kota Intan?", "term": "Garut"};

fs.writeFileSync("./data.json", JSON.stringify(obj),"utf-8")

let count = 0;

console.log("selamat datang di permainan Tebak Kata, silahkan isi jawaban yang benar ya! \n");

console.log("Pertanyaan: " + obj[count].definition);

rl.prompt();

rl.on("line", (answer) => {

    if (answer.toString().toLowerCase() == obj[count].term.toLowerCase()) {
        console.log("Selamat Anda Benar! \n");
        count++;
        if(count == obj.length) {
            console.log("Hore Anda Menang!");
            rl.close();
        };
        

    } else {
        console.log("Wkwkwkwk, Anda Kurang Beruntung! \n")
    }
    console.log(obj[count].definition);
    rl.prompt();

}).on("close", () => {
    process.exit(0);
});


