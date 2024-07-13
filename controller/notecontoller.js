const generator = require("../utils/generator");

exports.getallnotes = (req, res) => {
  var genID = generator.generate();
  res.send("get all notes: " + genID);
};

exports.saveNote = (req, res) => {
  res.send("save note");
};

exports.updateNote = (req, res) => {
  res.send("update note");
};

exports.deleteNote = (req, res) => {
  res.send("delete note");
};
