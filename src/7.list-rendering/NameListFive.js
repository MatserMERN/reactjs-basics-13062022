import React from 'react'
import Person from './Person'

function NameListFive() {
    const persons = [
        {
            id: 1,
            name: "Scott",
            age: 46,
            skill: 'Great Boss'
        },
        {
            id: 2,
            name: "Adam",
            age: 44,
            skill: 'Business Analyst'
        },
        {
            id: 3,
            name: "Tuan",
            age: 42,
            skill: 'Tech Boss'
        },
        {
            id: 4,
            name: "Uma",
            age: 40,
            skill: 'Javascript Developer'
        },
    ]

    return (
        // we can use either <React.Fragment> or <>
        <React.Fragment> 
            
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // persons.map(person => {
                        //     return (
                        //         <tr key={person.id}>
                        //             <td>{person.id}</td>
                        //             <td>{person.name}</td>
                        //             <td>{person.age}</td>
                        //             <td>{person.skill}</td>
                        //         </tr>
                        //     )
                        // })
                        persons.map(person => (<Person key={person.id} person={person} />))
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default NameListFive