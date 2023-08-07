const fs = require("fs");
const readline = require("readline")
const data = fs.readFileSync("./data.json", "utf-8")
const obj = JSON.parse(data);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: "Tebakan: " })
let count = 0;

console.log("Selamat datang di permainan Tebak kata, silahkan isi dengan jawaban yang benar ya! \n")
console.log(`Pertanyaan: ${obj[count].definition}`);

rl.prompt();

rl.on("line", (answer) => {
    if (answer.toLowerCase() == obj[count].term.toLowerCase()) {
        count++
        if (count == obj.length) {
            console.log("\nHore Anda Menang! \n");
            rl.close()
        }
        console.log("Selamat Anda Benar! \n")
        console.log(`Pertanyaan: ${obj[count].definition}`);

    } else console.log("Wkwkwkwk, Anda kurang beruntung!\n")
    rl.prompt()
}).on("close", () => {
    process.exit(0)
});