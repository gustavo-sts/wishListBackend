// wishSchema.js

const mongoose = require("mongoose");

// Define o esquema
const wishSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    previsao: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Adiciona automaticamente os campos createdAt e updatedAt
  }
);

// Cria o modelo a partir do esquema
const Wish = mongoose.model("Wish", wishSchema);

module.exports = Wish;
