import React from "react"
import { connect } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = (props) => {

  const styles = {
    margin: "0 0 10px 0",
  }

  return (
    <div style={styles}>
      <label htmlFor="filter">filter:</label>
      <input 
        type="text" 
        id="filter" 
        onChange={(e) => props.filterChange(e.target.value)}
      />
    </div>
  )
}

export default connect(
  null,
  { filterChange }
)(Filter)