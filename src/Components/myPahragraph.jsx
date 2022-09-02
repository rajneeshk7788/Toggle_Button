import React from 'react'

const myPahragraph = (props) => {
    console.log("My pahragraph is running")
  return (
    <p>{props.children}</p>
  )
}

export default myPahragraph