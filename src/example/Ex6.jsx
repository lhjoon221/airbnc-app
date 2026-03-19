import React from 'react'

/* 
  - jsx 안에서 자바스크립트 문법을 선언하려면 {}(블록스코프)를 써야하기 때문에 스타일을 적용할 때도 객체 형태로 선언해줘야한다.
  - camel표기법(두단어결합시 두번째단어의 첫글자는 대문자로)
  - font-size(x) / fontSize(o)
*/
export default function Ex6() {
    const testStyle = {
        background: 'pink',
        fontSize: '20px',
        fontWeight: 'bold'
    }
    return (
        <>
            <div style={testStyle} className='title'>Ex6</div>
            <div style={{
                fontSize: '40px',
                background: 'skyblue',
                textAlign: 'center'
            }}>리액트 문법 이해</div>
        </>
    )
}
