import React from 'react'

const Information = (props) => {
  return (
    <div>
      <p>I'm from {props.home}</p>
      <p>I study {props.study}</p>
      <p>I like {props.like}</p>
    </div>
  )
}

export default Information
