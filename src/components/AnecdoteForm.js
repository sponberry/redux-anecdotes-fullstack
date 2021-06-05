import React from 'react'
import { connect } from "react-redux"
import { addNewAnecdote } from "../reducers/anecdoteReducer"
import { messageChange } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {

  const addNew = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ""
    props.addNewAnecdote(anecdoteContent)
    props.messageChange(`Added "${anecdoteContent}"`, 5)
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

export default connect(
  null,
  { 
    addNewAnecdote,
    messageChange,
  }
)(AnecdoteForm)