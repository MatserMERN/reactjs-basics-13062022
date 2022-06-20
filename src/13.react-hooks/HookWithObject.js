import React, {useState} from 'react'

function HookWithObject() {
    const [user, setUser] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <h1>Form using Hooks</h1>
        <form>
            <div>
                <label>FirstName</label>
                <input type="text" 
                       className="form-control w-50"
                       value={user.firstName}
                       onChange={(event) =>setUser({...user, firstName: event.target.value}) }
                />
            </div>
            <div>
                <label>LastName</label>
                <input type="text" 
                       className="form-control w-50"
                       value={user.lastName}
                       onChange={(event) =>setUser({...user, lastName: event.target.value}) }
                />
            </div>

            <h2>Your FirstName is : { user.firstName}</h2>
            <h2>Your LastName is  : { user.lastName}</h2>
        </form>
    </div>
  )
}

export default HookWithObject