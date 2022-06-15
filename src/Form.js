import React, { useRef, useState } from 'react'

const Form = () => {

  const [first, setFirst] = useState()
  const [second, setSecond] = useState()

  return (
    <div>
      <input onChange={(e) => {
        setFirst(e.target.value)
        setSecond(first)
      }}>
      </input>
      <br />
      {first}
      <br />
      {second}
    </div>
  )
}

export default Form