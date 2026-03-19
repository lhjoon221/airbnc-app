import React from 'react'
import { useState } from 'react'

export default function Ex9() {
    let [fruit, setFruit] = useState(['apple', 'peach', 'mango'])
    console.log(fruit)

    function myFunc() {
        console.log(1)
    }
  return (
    <div>
        <h4>{fruit}</h4>
        <button onClick={() => {
            /* let fruit2 = ['banana', 'grape', 'strawberry'] */
            /* let copy = [...fruit,...fruit2] */
            let copy2 = [...fruit]
            copy2[0] = 'tomato'
            setFruit(copy2)
        }}>과일 추가</button>
        <button onClick={myFunc}>함수실행</button>
    </div>
  )
}
