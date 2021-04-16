const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('dB.json');
const db = low(adapter);

module.exports = { db }