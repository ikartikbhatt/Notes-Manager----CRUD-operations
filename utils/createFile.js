const path = require("path");
const operations = require("../modules/operation");
const fs = require("fs");

async function createFile(req, res) {
  try {
    const data = await req.body;
    const keys = Object.keys(data);

    console.log("data", data);
    console.log("keys", keys);
    console.log("File Name:", data.fileName);
    console.log("File Content:", data.fileContent);

    if (!data || keys.length ===0) {
      return res.status(400).json({ message: "Please provide valid data" });
    }

    if (
      keys.length !== 2 ||
      keys[0] !== "fileName" ||
      keys[1] !== "fileContent" ||
      data.fileName.trim() === ""
    ) {
      return res.status(400).json({
        message:
          'kindly pass two  key as "fileName" and value as "fileContent and fileName cannot be empty" ',
      });
    }

    const createFilePath = path.join(__dirname, "..", "uploads", data.fileName);
    console.log("filePath", createFilePath);
    const formattedPath = createFilePath.replace(/\\/g, "/");
    const fileContent = data.fileContent;

    if (fs.existsSync(createFilePath)) {
      return res.status(400).json({ message: "File already exists" });
    }

    operations.createFile(createFilePath, fileContent);
    return res
      .status(201)
      .json({
        message: "File created successfully",
        FileName: data.fileName,
        FileContent: fileContent,
        FilePath: formattedPath,
      });
  } catch (error) {
    console.log("inside create files catch block>>>>>", error);
    res.status(400).send({ message: error });
  }
}

module.exports = createFile;
