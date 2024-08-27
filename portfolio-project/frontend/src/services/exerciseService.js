const API_URL = "/api/exercises"

export const getExercises = async () => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error("Failed to fetch exercises")
  }
  return await response.json()
}

export const getExerciseById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch exercise with ID: ${id}`)
  }
  return await response.json()
}

export const createExercise = async (exerciseData) => {
  try {
    const response = await fetch("/api/exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exerciseData),
    })

    if (response.ok) {
      return await response.json()
    } else {
      return false
    }
  } catch (error) {
    console.error("Failed to create exercise", error)
    return false
  }
}

export const updateExercise = async (id, exerciseData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exerciseData),
  })
  if (response.status !== 200) {
    throw new Error("Failed to update exercise")
  }
  return await response.json()
}

export const deleteExercise = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" })
  if (response.status !== 204) {
    throw new Error("Failed to delete exercise")
  }
  return true
}
