import React from 'react'

/* 
  AND연산자(&&) - 조건이 만족안될 경우 아무것도 출력되지 않음. 즉 true만 적용 
*/
export default function Ex4() {
    const animal = '딜리트'
  return (
    <div>
        { animal === '딜리트야' && <div>딜리트 너무 이뻐</div>}
    </div>
  )
}
