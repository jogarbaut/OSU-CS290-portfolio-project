import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ExerciseForm from "../components/ExerciseForm"
import { createExercise } from "../src/services/exerciseService"
import { ExerciseContext } from "../context/ExerciseContext"

const CreateExercisePage = () => {
  const { dispatch } = useContext(ExerciseContext)
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    const success = await createExercise(formData)
    if (success) {
      dispatch({ type: "ADD_EXERCISE", payload: formData })
      alert("Exercise created successfully!")
      navigate("/")
    } else {
      alert("Failed to create exercise.")
      navigate("/")
    }
  }

  return (
    <div>
      <h1>Create New Exercise</h1>
      <ExerciseForm onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateExercisePage
