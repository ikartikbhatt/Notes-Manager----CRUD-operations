const path = require("path");
const operations = require("../modules/operation"); // listFiles is async
const fs = require("fs");
async function listFiles(req, res) {
  try {
    const data = req.body;
    console.log('list files data',data);
    
    const keys = Object.keys(data);

    if (!data || keys.length === 0) {
      return res.status(400).json({ message: "Please provide valid data" });
    }

    if (
      keys.length !== 1 ||
      keys[0] !== "action" ||
      data.action !== "listFiles"
    ) {
      return res.status(400).json({
        message: 'Kindly pass one key as "action" and value as "listFiles"',
      });
    }

    const listFilePath = path.join(__dirname, "..", "uploads");
    const formattedPath = listFilePath.replace(/\\/g, "/");

    const fileList =  operations.listFiles(listFilePath);
    console.log('fileList>>>',fileList);
     
    const fileContents = {};

    for (const file of fileList) {
      const fullPath = path.join(listFilePath, file);
      const fileStat =  fs.statSync(fullPath);
      

      if (fileStat.isFile()) {
        const content =  fs.readFileSync(fullPath, "utf-8"); 
        fileContents[file] = content.split("\n");
      }
    }

    return res.status(201).json({
      message: "File listed successfully",
      FileList: fileList,
      FileContents: fileContents,
      FilePath: formattedPath,
    });

  } catch (error) {
    console.log("Inside list files catch block >>>>>", error);
    res.status(400).json({ message: "Error listing files", error: error.message });
  }
}

module.exports = listFiles;
