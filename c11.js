const fs = require("fs");
const readline = require("readline");
const data = fs.readFileSync("./data.json", "utf-8");
const rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt: "Tebakan: "});
const obj = JSON.parse(data);
let count = 0; counter = 0;

obj.push({"definition":"Sebutkan kota yang memiliki julukan kota Intan?","term":"Garut"});
fs.writeFileSync("./data", JSON.stringify(obj));

console.log("Selamat datang di Tebak kata, silahkan isi jawaban yang benar ya! \n")
console.log("Pertanyaan:", obj[count].definition);
rl.prompt();

rl.on("line", (answer) => {
    if(answer.toString().toLowerCase() == obj[count].term.toLowerCase()) {
        console.log("Selamat Anda Benar! \n");
        count++;
        if(count == obj.length) {
            console.log("Hore Anda Menang!")
            rl.close()
        }
        console.log("Pertanyaan:", obj[count].definition);
    } else {
        console.log("Wkwkwkwk, Anda kurang beruntung! \n")
    }
    rl.prompt();
}).on("close", () => {
    process.exit(0)
});