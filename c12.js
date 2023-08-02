const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, prompt: "Jawban: "
});

const data = fs.readFileSync("./data.json", "utf-8");

const obj = JSON.parse(data);

let count = 0;
let counter = 0;
console.log("selamat datang di permainan Tebak Kata, silahkan isi jawaban yang benar ya! \n");

console.log("Pertanyaan: " + obj[count].definition);

rl.prompt();

rl.on("line", (answer) => {

    if (answer.toString().toLowerCase() == obj[count].term.toLowerCase()) {
        console.log("Anda Beruntung! \n");
        count++;

        if (count == obj.length) {
            console.log("Hore Anda Menang!");
            rl.close();
        };
    } else if (answer.toLowerCase() == "skip") {
        obj.push(obj[count])
        count++;
        console.log("\t");
        counter = "";
        
    } else {
        counter++
        console.log(`Anda Kurang Beruntung! anda telah salah ${counter} kali, silahkan coba lagi\n`)
    }
    console.log(obj[count].definition);
    rl.prompt();

}).on("close", () => {
    process.exit(0);
});


