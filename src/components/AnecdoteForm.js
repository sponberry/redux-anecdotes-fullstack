import React from 'react'
import { useDispatch } from "react-redux"
import { addNewAnecdote } from "../reducers/anecdoteReducer"
import { messageChange, messageClear } from "../reducers/notificationReducer"


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNew = (event) => {
    event.preventDefault()
    const newAnecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(addNewAnecdote(newAnecdoteContent))
    dispatch(messageChange(`Added "${newAnecdoteContent}"`))
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