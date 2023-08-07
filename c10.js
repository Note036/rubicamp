const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: "tulis kalimatmu disini > " })

rl.prompt()

rl.on("line", (answer) => {
    if (answer.toLowerCase() == "good bye!") return rl.close()
    else {
        const kalimat = [], kata = answer.split(" ")
        for (let x of kata) {
            if (/^[aiueo]/.test(x)) kalimat.push(x)
            else kalimat.push(x.slice(1) + x[0] + "nyo")
        } console.log("hasil konversi: " + kalimat.join(" "))
    }

    rl.prompt()
}).on("close", () => {
    process.exit(0)
})