import React, { createContext, useReducer } from "react"
import { exerciseReducer } from "../reducers/exerciseReducer"

export const ExerciseContext = createContext()

const initialState = {
  exercises: [],
}

export const ExerciseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(exerciseReducer, initialState)

  return (
    <ExerciseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExerciseContext.Provider>
  )
}
