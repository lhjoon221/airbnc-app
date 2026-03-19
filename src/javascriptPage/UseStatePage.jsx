import React from 'react'
import { useState } from 'react';

export default function UseStatePage() {
    const [count, setCount] = useState(0);
    //let count = 0
    const [like, setLike] = useState(false)

    const toggleLike = () => {
        //현재 상태의 반대(!false)
        setLike(!like)
    }
  return (
    <div>
        <p>현재숫자: {count}</p>
        <button onClick={()=> setCount(count+1)}>1씩 증가</button>

        <button onClick={toggleLike}>
            {/* like가 true이면 빨간색 하트 아니면 하얀색 하트 */}
            {like ? '🧡' : '🤍'}
        </button>
        <p>현재상태: {like?"좋아요":"눌러주세요"}</p>
    </div>
  )
}
