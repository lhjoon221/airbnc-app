import React, { useState } from 'react'

/* const [변수, 업데이트 함수] = useState() */
export default function Ex7() {
    const [posts, setPosts] = useState('맛집')
    let title ='매운마라맛';
    console.log(posts)
  return (
    <div>
        <div className='black-nav'>
            <div>Blog</div>
        </div>
        <div className="list"></div>
        <h4>{posts}</h4>
        <p>3월 17일 발행</p>
        <p>{title}</p>
        <button onClick={()=>setPosts('데이트맛집')}>변경</button>
    </div>
  )
}
