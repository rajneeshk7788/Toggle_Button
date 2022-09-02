import React from 'react'
import MyPahragraph from './myPahragraph'

const Output = (props) => {
    const items = props.items
    const arr1=items.sort((a,b)=>a-b)
    console.log(`As a Props ${arr1}`)

    const arr = [4, 7, 3, 1, 8, 5, 9, 2]
    console.log(arr)
    const sortList = arr.sort((a, b) => a - b)
    console.log(`As a Array ${sortList}`);

    console.log("Output Running")
    return (
        <>
            <h1>{arr1.map((item) => {
                return <li key={item}>{item}</li>
            })}</h1>
            <h1>{sortList.map((item) => {
                return <li key={item}>{item}</li>
            })}</h1>
            <MyPahragraph>{props.show ? "This Is New!" : ""}</MyPahragraph>
        </>
    )
}

export default Output