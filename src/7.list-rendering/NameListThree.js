import React from 'react'

function NameListThree() {
    const persons =[
        {
            id: 1,
            name: "Scott",
            age :46,
            skill: 'Great Boss'
        },
        {
            id: 2,
            name: "Adam",
            age :44,
            skill: 'Business Analyst'
        },
        {
            id: 3,
            name: "Tuan",
            age :42,
            skill: 'Tech Boss'
        },
        {
            id: 4,
            name: "Uma",
            age :40,
            skill: 'Javascript Developer'
        },
    ]

    const personList = persons.map(person => {
        return (
            <div key={person.id}>
                <h2>Name: {person.name}</h2>
                <h2>Age: {person.age}</h2>
                <h2>Skill: {person.skill}</h2>
                <br />
            </div>
        )
    })
  return personList
}

export default NameListThree