
const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return action.message
    case "CLEAR_MESSAGE":
      return ""
    default:
      return state
  }
}

export const messageChange = ( message, seconds ) => {
  return async dispatch => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_MESSAGE"})
    }, 1000 * seconds)
    dispatch({
      type: "NEW_MESSAGE",
      message,
    })
  }
}

export default notificationReducer