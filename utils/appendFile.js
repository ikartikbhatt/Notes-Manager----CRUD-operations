const path = require("path");
const operations = require("../modules/operation");
const fs = require("fs");

async function appendFile(req, res) {
  try {
    const data = await req.body;
    const keys = Object.keys(data);

    console.log("data", data);
    console.log("keys", keys);
    console.log("File Name:", data.existingFileName);
    console.log("File Content:", data.updateFileContent);

    if (!data || keys.length ===0) {
      return res.status(400).json({ message: "Please provide valid data" });
    }

    if (
      keys.length !== 2 ||
      keys[0] !== "existingFileName" ||
      keys[1] !== "updateFileContent" ||
      data.existingFileName.trim() === ""
    ) {
      return res.status(400).json({
        message:
          'kindly pass two  key as "existingFileName" and value as "updateFileContent and existingFileName cannot be empty" ',
      });
    }

    const updatedFilePath = path.join(__dirname, "..", "uploads", data.existingFileName);
    console.log("filePath", updatedFilePath);
    const formattedPath = updatedFilePath.replace(/\\/g, "/");
    
    if (!fs.existsSync(updatedFilePath)) {
        return res.status(400).json({ message: "File doesn't  exists" });
    }
    
    operations.appendFile(updatedFilePath, data.updateFileContent);
    const updatedFileContent = fs.readFileSync(updatedFilePath , 'utf-8').split('\n');
    return res
      .status(201)
      .json({
        message: "File updated successfully",
        FileName: data.existingFileName,
        FileContent: updatedFileContent,
        FilePath: formattedPath,
      });
  } catch (error) {
    console.log("inside create files catch block>>>>>", error);
    res.status(400).send({ message: error });
  }
}

module.exports = appendFile;
