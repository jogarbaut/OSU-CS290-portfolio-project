const exerciseModel = require("../models/exerciseModel")

const createExercise = async (req, res) => {
  try {
    const exercise = await exerciseModel.createExercise(req.body)
    res.status(201).json(exercise)
  } catch (error) {
    res.status(400).json({ error: "Failed to create exercise" })
  }
}

const getExercises = async (req, res) => {
  try {
    const query = req.query
    const exercises = await exerciseModel.getExercises(query)
    res.status(200).json(exercises)
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve exercises" })
  }
}

const getExerciseById = async (req, res) => {
  try {
    const exercise = await exerciseModel.getExerciseById(req.params.id)
    if (exercise) {
      res.status(200).json(exercise)
    } else {
      res.status(404).json({ error: "Not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve exercise" })
  }
}

const updateExerciseById = async (req, res) => {
  try {
    const exercise = await exerciseModel.updateExerciseById(
      req.params.id,
      req.body
    )
    if (exercise) {
      res.status(200).json(exercise)
    } else {
      res.status(404).json({ error: "Not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update exercise" })
  }
}

const deleteExerciseById = async (req, res) => {
  try {
    const result = await exerciseModel.deleteExerciseById(req.params.id)
    if (result) {
      res.status(204).send()
    } else {
      res.status(404).json({ error: "Not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete exercise" })
  }
}

module.exports = {
  createExercise,
  getExercises,
  getExerciseById,
  updateExerciseById,
  deleteExerciseById,
}
