import React from 'react'

function NameListFour() {
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

  return (
    <div>
        {
            persons.map(person => {
                return (
                    <ul key={person.id}>
                        <li>{person.id}</li>
                        <li>{person.name}</li>
                        <li>{person.age}</li>
                        <li>{person.skill}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default NameListFour