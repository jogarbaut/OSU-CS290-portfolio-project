const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  reps: { type: Number, required: true, min: 1 },
  weight: { type: Number, required: true, min: 1 },
  unit: { type: String, required: true, enum: ["kgs", "lbs"] },
  date: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{2}-\d{2}-\d{2}$/.test(v)
      },
      message: (props) => `${props.value} is not a valid date format!`,
    },
  },
})

const Exercise = mongoose.model("Exercise", exerciseSchema)

const createExercise = async (data) => {
  return await Exercise.create(data)
}

const getExercises = async (query) => {
  return await Exercise.find(query)
}

const getExerciseById = async (id) => {
  return await Exercise.findById(id)
}

const updateExerciseById = async (id, data) => {
  return await Exercise.findByIdAndUpdate(id, data, { new: true })
}

const deleteExerciseById = async (id) => {
  return await Exercise.findByIdAndDelete(id)
}

module.exports = {
  createExercise,
  getExercises,
  getExerciseById,
  updateExerciseById,
  deleteExerciseById,
}
