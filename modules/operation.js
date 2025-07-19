//list files

const fs = require("fs");

//listFiles
function listFiles(listFilePath) {
  return fs.readdirSync(listFilePath);
}

//createFile
function createFile(createFilePath, fileContent) {
  return fs.writeFileSync(createFilePath, fileContent);
}

//append File
function appendFile(appendFilePath, fileContent) {
  return fs.appendFileSync(appendFilePath, '\n' + fileContent);
}

//delete File
function deleteFile(deleteFilePath) {
    return fs.unlinkSync(deleteFilePath);
    }
module.exports = { listFiles, createFile, appendFile , deleteFile};
