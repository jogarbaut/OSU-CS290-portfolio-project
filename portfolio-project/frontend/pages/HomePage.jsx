import React, { useEffect, useContext } from "react"
import ExerciseTable from "../components/ExerciseTable"
import { getExercises, deleteExercise } from '../src/services/exerciseService'
import { ExerciseContext } from "../context/ExerciseContext"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const { state, dispatch } = useContext(ExerciseContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchExercises = async () => {
      const data = await getExercises()
      dispatch({ type: "SET_EXERCISES", payload: data })
    }
    fetchExercises()
  }, [dispatch])

  const handleDelete = async (id) => {
    const success = await deleteExercise(id)
    if (success) {
      dispatch({ type: "DELETE_EXERCISE", payload: id })
    }
  }

  return (
    <div>
      <h1>Workout Tracker</h1>
      <button onClick={() => navigate("/create")}>Add Exercise</button>
      <ExerciseTable exercises={state.exercises} onDelete={handleDelete} />
    </div>
  )
}

export default HomePage
