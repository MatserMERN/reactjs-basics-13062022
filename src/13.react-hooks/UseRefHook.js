import userEvent from '@testing-library/user-event';
import React, {useState, useRef} from 'react'

function UseRefHook() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus()
        console.log(inputElement.current.value)
    }
  return (
    <div>
        <h1>UseRef Hook</h1>
        <input type="text"  ref={inputElement} value="Scott" onChange={() => console.log("hello")}/>
        <button className="btn btn-primary"
                onClick={() => focusInput()}
        >
            Foucs
        </button>
    </div>
  )
}

export default UseRefHook