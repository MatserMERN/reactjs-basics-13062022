import React from 'react'
import "./Styling.css"

function StyleSheet({primary}) {
    let className = primary ? "primary" : "secondary"
  return (
    <div>
        <h1 className={`${className} enlarge-text`}>Styling using Stylesheets</h1>
    </div>
  )
}

export default StyleSheet