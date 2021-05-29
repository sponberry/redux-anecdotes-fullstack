import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from "../reducers/anecdoteReducer"
import { messageChange, messageClear } from "../reducers/notificationReducer"

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div className="anecdote">
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  let anecdotes = useSelector(state => state.anecdotes)
  anecdotes.sort((a, b) => b.votes - a.votes)
  const filter = useSelector(state => state.filter)

  let entries = new RegExp(".*"+filter.toLowerCase()+".*")
  let filteredAnecdotes = []
  anecdotes.map(anecdote => {
    if (entries.test(anecdote.content.toLowerCase())) {
      filteredAnecdotes.push(anecdote)
    }
    return null
  })

  const dispatch = useDispatch()

  const handleClick = (id, anecdote) => {
    dispatch(addVote(id))
    dispatch(messageChange(`Vote added for ${anecdote}`))
    setTimeout(() => {
      dispatch(messageClear())
    }, 5000)
  }

  return (
    <div className="anecdoteList">
      {filteredAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => handleClick(anecdote.id, anecdote.content)}
        />
      )}
    </div>
  )
}

export default AnecdoteList