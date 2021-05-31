const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id
      const upvotedAnecdote = state.find(anec => anec.id === id)
      upvotedAnecdote.votes += 1
      return state.map(anec =>
        anec.id !== id ? anec : upvotedAnecdote)
    case "ADD_NEW":
      return state.concat(action.data)
    case "INIT_ALL":
      return action.data
    default:
      return state
  }
}

export const addVote = (id) => {
  return {
    type: "VOTE",
    data: { id }
  }
}

export const addNewAnecdote = (data) => {
  return{
    type: "ADD_NEW",
    data,
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ALL",
    data: anecdotes,
  }
}

export default reducer