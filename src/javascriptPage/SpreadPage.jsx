import React, { useState } from 'react'

export default function SpreadPage() {
    const origin = [1, 2, 3]
    const upload = [...origin, 4, 5]
    //console.log('origin', origin)
    //console.log('upload', upload)
    const [items, setItems] = useState(['김밥', '라면'])
    console.log('items', items)

    const pushItem = () => {
        /* items.push('떡볶이')
        console.log('items', items) */
        setItems([...items, '떡볶이'])
    }

    return (
        <div>
            <h1>SpreadPage</h1>
            <p>
                - 리액트는 기존 배열이나 객체를 직접 수정이 안됨 <br />
                - 기존 배열이나 객체를 복사한 후 추가 데이터는 뒤에 추가 <br />
                - 용도: 배열에 항목 추가하기 / 객체의 특정값만 바꾸기
            </p>
            <h2>왜 push로 하면 안되는지 확인해주세요</h2>
            <button onClick={pushItem}>push로 데이터 추가</button>

            <ul>
                {
                    items.map((item) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
