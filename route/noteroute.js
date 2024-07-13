var express = require("express");
const noteCtrl = require("../controller/notecontoller");
var router = express.Router();

router.get("/notes", noteCtrl.getallnotes);

router.post("/notes/save", noteCtrl.saveNote);

router.put("/notes/update", noteCtrl.updateNote);

router.delete("/notes/delete", noteCtrl.deleteNote);

module.exports = router;
