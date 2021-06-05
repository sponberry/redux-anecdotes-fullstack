
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
    let time
    clearTimeout(time)
    dispatch({
      type: "NEW_MESSAGE",
      message: `${message} ${time}`,
    })
    time = setTimeout(() => {
      dispatch({ type: "CLEAR_MESSAGE" })
    }, 1000 * seconds)
  }
}

export default notificationReducer