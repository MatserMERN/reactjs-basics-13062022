import React, {useState} from 'react'

function HookCounter() {
       const [count, setCount] = useState(0)

    //    function incrementCount(){
    //     setCount(count + 1)
    //    }
  return (
    <div>
        <h1>Count : {count}</h1>
        {/* <button className="btn btn-primary"
                onClick={() => incrementCount()}
        >Increment</button> */}
        <button className="btn btn-primary" onClick={() => setCount(count +1)}>Increment</button>
    </div>
  )
}

export default HookCounter