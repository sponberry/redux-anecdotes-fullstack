import React from "react"
import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()

  const styles = {
    margin: "0 0 10px 0",
  }

  return (
    <div style={styles}>
      <label htmlFor="filter">filter:</label>
      <input 
        type="text" 
        id="filter" 
        onChange={(e) => dispatch(filterChange(e.target.value))}
      />
    </div>
  )
}

export default Filter