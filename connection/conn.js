const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});

const pass_word = process.env.PASS_WORD;

const conn = async function () {
  try {
    if (!pass_word) {
      throw new Error("A variável de ambiente PASS_WORD não está definida.");
    }

    await mongoose.connect(
      `mongodb+srv://homeworkgustavo:${pass_word}@cluster-temporary.3j4mi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Temporary`
    );

    console.log("Conexão com o MongoDB bem-sucedida!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1); // Encerra o processo caso a conexão falhe
  }

  // Eventos adicionais para monitorar a conexão
  mongoose.connection.on("connected", () => {
    console.log("Mongoose conectado ao MongoDB.");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Erro de conexão com o MongoDB:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose desconectado do MongoDB.");
  });
};

module.exports = conn;
