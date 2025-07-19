const express = require("express");
const utils = require("../utils/index");

const router = express.Router({ caseSensitive: true });

// GET FILES LIST

router.get("/getFiles", (req, res) => {
  utils.listFiles(req, res);
});

//create a file with content/without content

router.post("/createFile", (req, res) => {
  utils.createFile(req, res);
});

//append content in existing file
router.patch("/updateFile", (req, res) => {
  utils.appendFile(req, res);
});

//delete a file

router.delete("/deleteFile", (req, res) => {
  utils.deleteFile(req, res);
});

module.exports = router;
