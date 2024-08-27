import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ExerciseRow = ({ exercise, onDelete }) => {
  const navigate = useNavigate()

  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <td>
        <FaEdit onClick={() => navigate(`/edit/${exercise._id}`)} />
        <FaTrash onClick={() => onDelete(exercise._id)} />
      </td>
    </tr>
  )
}

export default ExerciseRow
