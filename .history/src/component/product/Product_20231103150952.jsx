import React, { useState } from 'react'

export default function Product() {


  let [age, setAge] = useState(20);

  const newAge = (a) => {
    setAge(a);
  }

  return (
    <>
    <h2>Hi My Name is Hadeel</h2>
    <p>My age is {age}</p>
    <button onClick={() => newAge(10)}>New Age</button>
    <button onClick={() => newAge(20)}>New Age</button>
    <button onClick={() => newAge(30)}>New Age</button>
    <button onClick={() => newAge(40)}>New Age</button>
    <button onClick={() => newAge(50)}>New Age</button>
    <button onClick={() => newAge(10)}>New Age</button>
    <button onClick={() => newAge(10)}>New Age</button>
    <button onClick={() => newAge(10)}>New Age</button>

   
    </>
  )
}
