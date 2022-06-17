import React from 'react'

const FunctionClick = () => {

    function clickHandler (){
        console.log('Button is clicked - function')
    }
  return (
    <div>
        <br />
        <button className="btn btn-primary"
                onClick={clickHandler}
        >Function Click </button>
    </div>
  )
}

export default FunctionClick