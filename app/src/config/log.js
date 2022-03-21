
const fs = require("fs");
const appRoot = require("app-root-path");
// const accessLogStream = fs.createWriteStream(`${루트경로}/log/access.log`, { flags: 'a' })
// const accessLogStream = fs.createWriteStream(`${__dirname}/log/access.log`, { flags: 'a' });
const accessLogStream = fs.createWriteStream(`${appRoot}/log/access.log`, { flags: 'a' });

module.exports = accessLogStream;