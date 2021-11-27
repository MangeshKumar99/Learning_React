import React from 'react'
import Car from './Car'


function List() {
    let carInfoArray = []

    let cars = [
        {
            "color": "purple",
            "type": "minivan",
            "registration": new Date('2017-01-03'),
            "capacity": 7
        },
        {
            "color": "red",
            "type": "station wagon",
            "registration": new Date('2018-03-03'),
            "capacity": 5
        },
        {
            "color": "yellow",
            "type": "station truck",
            "registration": new Date('2018-03-03'),
            "capacity": 8
        }
    ]

    for (let i = 0; i < cars.length; i++) {
        let carInfo = <h2 key={i}> Color of car is {cars[i].color} Type is {cars[i].type} Capacity is {cars[i].capacity}</h2>
        carInfoArray.push(carInfo)
    }
    return (
        <div>
            {carInfoArray}
        </div>
    )
}

export default List
