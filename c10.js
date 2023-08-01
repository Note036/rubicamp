const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tuli kalimatmu disini > ',
});

rl.prompt();

rl.on('line', (line) => {
    const pisahKata = line.split(" ");
    const vokal = "aiueo";
    let txt = ""
    for (let i = 0; i < pisahKata.length; i++) {
        if (vokal.includes(pisahKata[i].charAt(0)) == true) {
            txt += pisahKata[i] + " ";

        };
        if (vokal.includes(pisahKata[i].charAt(0)) == false) {
            txt += pisahKata[i].slice(1) + pisahKata[i].charAt(0) + "nyo ";
        };

    };
    console.log(`hasil Konversi: ${txt}`);

    rl.prompt();
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
});
