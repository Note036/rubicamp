const fs = require("fs");
const readline = require("readline");
if (!process.argv[2]) {
    console.log(`Tolong sertakan nama file sebagai inputan soalnya
Misalnya 'node solution.js data.josn`)
} else {
    if (!fs.existsSync(`./${process.argv[2]}`)) console.log("File tidak ditemukan! Silahkan masukkan nama file soal dengan benar!")
    else {
        const data = fs.readFileSync(`./${process.argv[2]}`, "utf-8");
        const obj = JSON.parse(data);
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: "Jawaban: " });
        let count = 0, counter = 0;

        console.log(`Selamat datang di permainan Tebak-tebaban. Kamu akan diberi pertanyaan dari file ini 'data.json'.
Untuk bermain, jawablah dengan jawaban yang sesuai.
Gunakan 'skip' untuk menangguhkan pertanyaannya, dan diakhir pertanyaan akan ditanyakan lagi \n`);
        console.log(`Pertanyaan: ${obj[count].definition}`);

        rl.prompt();

        rl.on("line", (answer) => {
            if (answer.toLowerCase() == obj[count].term.toLowerCase()) {
                count++;
                counter = 0;
                console.log("\nAnda Beruntung!\n");
                if (count == obj.length) {
                    console.log("Anda Berhasil!");
                    rl.close();
                }
                console.log(`Pertanyaan: ${obj[count].definition}`)
            } else if (answer.toLowerCase() == "skip") {
                counter = 0;
                obj.push(obj[count]);
                count++;
                console.log("\t");
                console.log(`Pertanyaan: ${obj[count].definition}`);
            }
            else {
                counter++;
                console.log(`\nAnda kurang beruntung! Anda telah salah ${counter} kali, silahkan coba lagi.`);
            } rl.prompt();
        }).on("close", () => {
            process.exit(0)
        })
    }
}