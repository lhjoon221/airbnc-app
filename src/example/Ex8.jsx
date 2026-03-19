import React, { useState } from 'react'

export default function Ex8() {
    const [fruit, setFruit] = useState('사과')
    console.log(fruit)
  return (
    <div>
        버튼을 클릭하면 수박으로 출력해보세요
        <button onClick={()=>setFruit('수박')}>과일변경</button>
    </div>
  )
}
