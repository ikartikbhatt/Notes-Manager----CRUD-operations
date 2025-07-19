const path = require("path");
const operations = require("../modules/operation");
const fs = require("fs");
const { log } = require("console");

async function appendFile(req, res) {
  try {
    const data = await req.body;
    const keys = Object.keys(data);

    console.log("data:", data);
    console.log("keys:", keys);
    console.log("File Name:", data.fileName);

    if (!data || keys.length === 0) {
      return res.status(400).json({ message: "Please provide valid data" });
    }

    if (
      keys.length !== 1 ||
      keys[0] !== "fileName" ||
      data.fileName.trim() === ""
    ) {
      return res.status(400).json({
        message:
          'kindly pass only one key as "fileName" and provide a valid file name',
      });
    }

    const deleteFilePath = path.join(__dirname, "..", "uploads", data.fileName);
    console.log("filePath", deleteFilePath);
    const formattedPath = deleteFilePath.replace(/\\/g, "/");

    if (!fs.existsSync(deleteFilePath)) {
      return res.status(400).json({ message: "File doesn't  exists" });
    }

    operations.deleteFile(deleteFilePath);

    return res.status(201).json({
      message: "File deleted successfully",
      DeletedFileName: data.fileName,
      DeletedFilePath: formattedPath,
    });
  } catch (error) {
    console.log("inside create files catch block>>>>>", error);
    res.status(400).send({ message: error });
  }
}

module.exports = appendFile;
