import React from 'react'

function NameListOne() {
    const names =["Scott", "Adam", "Tuan"]
  return (
    <div>  
        {
            names.map((name, index) => <h1 key={index}>{name}</h1>)
        }
    </div>
  )
}

export default NameListOne