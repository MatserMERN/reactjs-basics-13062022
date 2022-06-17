import React from 'react'

function Inline() {
    const  heading = {
        fontSize: '48px',
        color: 'Blue'
    }
  return (
    <div>
        <h1 style={heading}>Inline Styling</h1>
        <h1 style={{fontSize: '72px', color: "orange"}}>Inline Styling</h1>
    </div>
  )
}

export default Inline