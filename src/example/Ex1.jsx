import React from 'react'

/* 
  JSX안에서도 자바스크립트 표현식을 사용한다.
  자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 {}감싸주면 된다.
*/

export default function Ex1() {
    const name = "user"
  return (
    <div>{name}</div>
  )
}
