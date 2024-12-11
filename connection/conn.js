const mongoose = require('mongoose');
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});


const pass_word = process.env.PASS_WORD;

const conn = async function () {
  await mongoose.connect(
    `mongodb+srv://homeworkgustavo:${pass_word}@cluster-temporary.3j4mi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Temporary`
  );
};

module.exports = conn