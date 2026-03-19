import React from 'react'

/* 즉시실행함수 */
export default function Ex5() {
    const animal = 'dogs'
  return (
    <div>
        {
            (()=>{
                if(animal === 'dog') {
                    return(<div>엄청 이뻐요</div>)
                } else {
                    return <div>식탐이 많아요</div>
                }
            })()
        }
    </div>
  )
}
