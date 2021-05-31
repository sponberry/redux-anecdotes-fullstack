import React from 'react'
import { useDispatch } from "react-redux"
import { addNewAnecdote } from "../reducers/anecdoteReducer"
import { messageChange, messageClear } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNew = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(addNewAnecdote(anecdoteContent))
    dispatch(messageChange(`Added "${anecdoteContent}"`))
    setTimeout(() => {
      dispatch(messageClear())
    }, 5000)
  }

  return (
    <div className="anecdoteForm">
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm