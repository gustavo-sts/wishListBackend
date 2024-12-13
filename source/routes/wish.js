// wishRouter.js

const express = require("express");
const Wish = require("../models/wishSchema"); // Importa o modelo do schema

const router = express.Router();

// Rota para listar todos os desejos
router.get("/wishes", async (req, res) => {
  try {
    const wishes = await Wish.find();
    res.status(200).json(wishes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar desejos", error });
  } finally {
    res.end();
  }
  
});

// Rota para criar um novo desejo
router.post("/wishes", async (req, res) => {
  try {
    const { nome, previsao } = req.body;

    if (!nome || !previsao) {
      return res
        .status(400)
        .json({ message: "Nome e previsão são obrigatórios" });
    }

    const newWish = new Wish({ nome, previsao });
    await newWish.save();

    res.status(201).json(newWish);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o desejo", error });
  } finally {
    res.end();
  }
  
});

// Rota para atualizar um desejo por ID
router.put("/wishes:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, previsao } = req.body;

    const updatedWish = await Wish.findByIdAndUpdate(
      id,
      { nome, previsao },
      { new: true, runValidators: true }
    );

    if (!updatedWish) {
      return res.status(404).json({ message: "Desejo não encontrado" });
    }

    res.status(200).json(updatedWish);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o desejo", error });
  } finally {
    res.end();
  }
  
});

// Rota para deletar um desejo por ID
router.delete("/wishes:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedWish = await Wish.findByIdAndDelete(id);

    if (!deletedWish) {
      return res.status(404).json({ message: "Desejo não encontrado" });
    }

    res.status(200).json({ message: "Desejo deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar o desejo", error });
  } finally {
    res.end();
  }
  
});

module.exports = router;
