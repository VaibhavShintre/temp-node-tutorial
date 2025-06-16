const os = require("os");

const user = os.userInfo();

const path = require("path");

console.log(path.sep);

console.log(`The System Uptime is ${os.uptime} seconds`);

const filepath = path.join("/content", "subfolder", "text.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, "/content", "subfolder", "text.txt");
console.log(absolute);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
