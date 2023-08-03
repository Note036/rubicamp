const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt: "Jawaban: "});
const data = fs.readFileSync("./data.json", "utf-8");
const obj = JSON.parse(data);
let count = 0;
let counter = 0;

console.log(`Selamat datang di permainan Tebak-tebaban. Kamu akan diberi pertanyaan dari file ini 'data.json'.
Untuk bermain, jawablah dengan jawaban yang sesuai.
Gunakan 'skip' untuk menangguhkan pertanyaannya, dan diakhir pertanyaan akan ditanyakan lagi \n`);

console.log(obj[0].definition)
rl.prompt()

rl.on("line", (answer) => {
    if(answer.toString().toLowerCase() == obj[count].term.toLowerCase()) {
        console.log("\nAnda Beruntung!\n");
        count++;
        if(count == obj.length) {
            console.log("Anda Berhasil!");
            rl.close()
        } else {
        console.log(obj[count].definition);
        counter = 0;}
    } else if(answer.toLowerCase() == "skip") {
        obj.push(obj[count]),
        console.log('\t')
        count++;
        console.log(obj[count].definition);
        counter = 0;
    } else {
        counter++;
        console.log(`\nAnda kurang beruntung! anda telah salah ${counter} kali, silahkan coba lagi.`);
    }
    
    rl.prompt()
}).on("close", () => {
    process.exit(0)
});