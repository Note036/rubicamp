const fs = require("fs");
const data = fs.readFileSync("./toDo.json", "utf-8");
const obj = JSON.parse(data);
const command = process.argv[2], id = process.argv[3], inform = process.argv.slice(3).join(" ");
let objIndex = id - 1, count = obj.length + 1;

if (!command || command.toLowerCase() == "help") {
    console.log(`>>> JS TODO <<<
node c13.js <command>
node c13.js list
node c13.js task <task_id>
node c13.js add <task_conten>
node c13.js delete <task_id>
node c13.js complete <task_id>
node c13.js uncomplete <task_id>
node c13.js list:outstanding asc|desc
node c13.js list:completed asc|desc
node c13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
node c13.js filter:<tag_name>`)
} else {
    switch (command.toLowerCase()) {
        case "list":
            console.log("Daftar Pekerjaan")
            for (let x of obj) {
                if (x.complete) {
                    x.complete = "[x]"
                    console.log(`${x.ID}. ${x.complete} ${x.title}.`)
                } else if (!x.complete) {
                    x.complete = "[ ]"
                    console.log(`${x.ID}. ${x.complete} ${x.title}.`)
                }
            }; break;
        case "task":
            for (let x in obj[objIndex]) console.log(`${x}: ${obj[objIndex][x]}`);
            break;
        case "add":
            if (inform) {
                console.log(`"${inform}" telah ditambahkan.`);
                obj.push({ "ID": count, "title": inform, "complete": false, tag: "" });
                fs.writeFileSync("./toDo.json", JSON.stringify(obj), "utf-8")
            } else if (!inform || inform == " ") return
            break;
        case "delete":
            console.log(`"${obj[objIndex].title}" telah dihapus dari daftar.`);
            obj.splice(objIndex, 1);
            for (let i = 0; i < obj.length; i++) obj[i].ID = i + 1
            fs.writeFileSync("./toDo.json", JSON.stringify(obj), "utf-8");
            break;
        case "complete":
            console.log(`"${obj[objIndex].title}" telah selesai.`);
            obj[objIndex].complete = true;
            fs.writeFileSync("./toDo.json", JSON.stringify(obj), "utf-8");
            break;
        case "uncomplete":
            console.log(`"${obj[objIndex].title}" status selesai dibatalkan.`);
            obj[objIndex].complete = false;
            fs.writeFileSync("./toDo.json", JSON.stringify(obj), "utf-8");
            break;
        case "list:outstanding":
            console.log("Daftar Pekerjaan")
            let outstanding = [];
            for (let x of obj) {
                if (!x.complete) {
                    x.complete = "[ ]";
                    outstanding.push(`${x.ID}. ${x.complete} ${x.title}.`);
                }
            }
            if (id == "asc") console.log(outstanding.join("\n"));
            else if (id == "desc") console.log(outstanding.reverse().join("\n"));
            break;
        case "list:completed":
            console.log("Daftar Pekerjaan")
            let completed = [];
            for (let x of obj) {
                if (x.complete) {
                    x.complete = "[x]";
                    completed.push(`${x.ID}. ${x.complete} ${x.title}.`);
                }
            }
            if (id == "asc") console.log(completed.join("\n"));
            else if (id == "desc") console.log(completed.reverse().join("\n"));
            break;
        case "tag":
            console.log(`Tag "${process.argv.slice(4)}" telah ditambahkan ke dalam daftar '${obj[objIndex].title}'`);
            obj[objIndex].tag = process.argv.slice(4);
            fs.writeFileSync("./toDo.json", JSON.stringify(obj), "utf-8");
            break;
        case `filter:${command.slice(7)}`:
            console.log("Daftar Pekerjaan");
            for (let x of obj) {
                if (x.tag.includes(command.slice(7))) {
                    if (x.complete) {
                        x.complete = "[x]"
                        console.log(`${x.ID}. ${x.complete} ${x.title}.`)
                    } else if (!x.complete) {
                        x.complete = "[ ]"
                        console.log(`${x.ID}. ${x.complete} ${x.title}.`)
                    }
                }
            }
    }
}