import React, { useState, useEffect } from "react"

const ExerciseForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    reps: "",
    weight: "",
    unit: "kgs",
    date: "",
  })

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Reps:
        <input
          type="number"
          name="reps"
          value={formData.reps}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Unit:
        <select name="unit" value={formData.unit} onChange={handleChange}>
          <option value="kgs">kgs</option>
          <option value="lbs">lbs</option>
        </select>
      </label>
      <label>
        Date:
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Save</button>
    </form>
  )
}

export default ExerciseForm
