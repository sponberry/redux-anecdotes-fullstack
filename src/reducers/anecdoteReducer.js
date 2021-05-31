import anecdoteService from "../services/anecdotes"

const reducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const upvotedId = action.data.id
      return state.map(anec =>
        anec.id !== upvotedId ? anec : action.data)
    case "ADD_NEW":
      return state.concat(action.data)
    case "INIT_ALL":
      return action.data
    default:
      return state
  }
}

export const addVote = (id, anecdote) => {
  return async dispatch => {
    const data = await anecdoteService.upvote(id, anecdote)
    dispatch({
      type: "VOTE",
      data,
    })
  }
}

export const addNewAnecdote = (content) => {
  return async dispatch => {
    const data = await anecdoteService.createNew(content)
    dispatch({
      type: "ADD_NEW",
      data,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_ALL",
      data: anecdotes,
    })
  }
}

export default reducer