import React, { useState } from 'react'

const MyButton = (props) => {
    

  return (
    <div>
      <button onClick={props.functionHandler}>
          count is {props.value}
        </button>
    </div>
  )
}

export default MyButton
