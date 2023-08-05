const fs = require("fs");
const data = fs.readFileSync("./toDo.json", "utf-8");
const obj = JSON.parse(data);
let inform = process.argv[3];
let command = process.argv[2];
let objIndex = obj[obj.findIndex(x => x.ID == inform)];
let count = obj.length + 1

if (!command || command.toLowerCase() == "help") {
    console.log(`>>> JS RODO <<<
node todo.js list
node todo.js task <task_id>
node todo.js add <task_content>
node todo.js delet <task_id>
node todo.js complete <task_id>
node todo.js uncomplete <task_id>
node todo.js list:outstanding asc|desc
node todo.js list:completed asc|desc
node todo.js tage <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
node todo.js filter:<tag_name>`)
}
else {
    switch (command.toLowerCase()) {
        case "list":
            console.log("Daftar Pekerjaan");
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].complete) {
                    obj[i].complete = "[x]";
                    console.log(`${obj[i].ID}. ${obj[i].complete} ${obj[i].title}.`);
                } else if (!obj[i].complete) {
                    obj[i].complete = "[ ]";
                    console.log(`${obj[i].ID}. ${obj[i].complete} ${obj[i].title}.`);
                }
            }; break;
        case "task":
            let tag = []
            let tag2 = objIndex
            for (let x in tag2) tag.push(x + ": " + objIndex[x]);
            console.log(tag.join("\n"))
            break;
        case "add":
            if (process.argv.slice(3).join(" ")) {
                console.log(`"${process.argv.slice(3).join(" ")}" telah diambahkan.`);
                obj.push({ "ID": count, "title": process.argv.slice(3).join(" "), "complete": false, "tags": "" });
                fs.writeFileSync("./toDo.json", JSON.stringify(obj));
            } else if (!process.argv.slice(3).join(" ") || process.argv.slice(3).join(" ") == " ") return
            break;
        case "delet":
            console.log(`"${objIndex.title}" telah dihapus dari daftar.`);
            obj.splice(objIndex, 1);
            fs.writeFileSync("./toDo.json", JSON.stringify(obj));
            break;
        case "complete":
            console.log(`"${objIndex.title}" telah selesai.`);
            objIndex.complete = true;
            fs.writeFileSync("./toDo.json", JSON.stringify(obj));
            break;
        case "uncomplete":
            console.log(`"${objIndex.title}" status selesai dibatalkan.`);
            objIndex.complete = false
            fs.writeFileSync("./toDo.json", JSON.stringify(obj));
            break;
        case "list:outstanding":
            console.log("Daftar Pekerjaan");
            let txt = [];
            for (let i = 0; i < obj.length; i++) {
                if (!obj[i].complete) {
                    obj[i].complete = "[ ]"
                    txt.push(`${obj[i].ID}. ${obj[i].complete} ${obj[i].title}.`);
                }
            } if (inform == "asc") console.log(txt.join("\n"));
            else if (inform == "desc") console.log(txt.reverse().join("\n"))
            break;
        case "list:completed":
            console.log("Daftar Pekerjaan");
            let txt1 = [];
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].complete) {
                    obj[i].complete = "[x]"
                    txt1.push(`${obj[i].ID}. ${obj[i].complete} ${obj[i].title}.`);
                }
            } if (inform == "asc") console.log(txt1.join("\n"));
            else if (inform == "desc") console.log(txt1.reverse().join("\n"))
            break;
        case "tags":
            console.log(`Tag '${process.argv.slice(4).join(',')}' telah ditambahkan ke daftar '${objIndex.title}'`)
            objIndex.tags = process.argv.slice(4);
            fs.writeFileSync("./toDo.json", JSON.stringify(obj));
            break;
        case command:
            console.log("Daftar Pekerjaan");
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].tags.includes(command.split(":")[1])) {
                    if (obj[i].complete) {
                        obj[i].complete = "[x]";
                        console.log(`${obj[i].ID}. ${obj[i].complete} ${obj[i].title}`)
                    } else if (!obj[i].complete) {
                        obj[i].complete = "[ ]";
                        console.log(`${obj[i].ID}. ${obj[i].complete} ${obj[i].title}`)
                    }
                }
            }
    }
}