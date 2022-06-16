import React from 'react'

const Greeting = (props) => {
    console.log(props)
    const {id, name, isAdmin, details, info,address, getMessage, skills, children } = props
  return (
    <div>
        <h4>Id: {id}</h4>
        <h4>Name: {name}</h4>
        <h4>IsAdmin: {isAdmin ? "true": "false"}</h4>
        <h4>Details: {details? details: "No Details Available"}</h4>
        <h4>Info: {info? info: "No information found"}</h4>
        <h4>Address: {address.city}</h4>
        <h4>GetMessage: {getMessage()}</h4>
        <h4>Skills: {skills[0]}</h4>
        <h4>Child: {children}</h4>
    </div>
  )
}

export default Greeting