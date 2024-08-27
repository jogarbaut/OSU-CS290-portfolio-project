export const exerciseReducer = (state, action) => {
  switch (action.type) {
    case "SET_EXERCISES":
      return { ...state, exercises: action.payload }
    case "ADD_EXERCISE":
      return { ...state, exercises: [...state.exercises, action.payload] }
    case "UPDATE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.map((exercise) =>
          exercise._id === action.payload._id ? action.payload : exercise
        ),
      }
    case "DELETE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise._id !== action.payload
        ),
      }
    default:
      return state
  }
}
