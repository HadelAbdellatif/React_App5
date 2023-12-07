import React from 'react'

export default function Product() {

  const getData = (name) => {
    alert(name);
  }

  return (
    <>
    <h2>Hi My Name is Hadeel</h2>
    <p>My age is 22</p>
    <button onClick={getData}>Click</button>
    </>
  )
}
