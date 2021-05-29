
const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return action.message
    default:
      return state
  }
}

export const messageChange = message => {
  return {
    type: "NEW_MESSAGE",
    message,
  }
}

export const messageClear = () => {
  return {
    type: "NEW_MESSAGE",
    message: "",
  }
}

export default notificationReducer