import * as fs from "node:fs";

const entry = "I cannot come in today - my smoke alarm went off at 3 a.m. and I have been standing in the yard in my pajamas negotiating with it ever since.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
