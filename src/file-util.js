const fs = require("fs");
const path = require("path");
const fsPromises = fs.promises;
const csv = require("csvtojson");
const { Parser } = require("json2csv");

async function readCSVFiletoJSON(fileName) {
  
  const jsonData = await csv().fromFile(path.join(__dirname, "../files/" + fileName));
  return jsonData;
}

async function writeJSONtoCSVFile(fileName, json) {
  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(json);
  await fsPromises.writeFile(path.join(__dirname, "../files/" + fileName), csv);
  return;
}

module.exports = {
    readCSVFiletoJSON,
    writeJSONtoCSVFile
}
