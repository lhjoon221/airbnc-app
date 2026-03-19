import React from 'react'
/* data */
import stays from '../data/Stay'
import { useParams, Link } from 'react-router-dom'

export default function DetailPage() {
  //console.log('detailpage', stays)
  /* 
    useParams() - react-router-dom
    - 웹사이트 주소창에 특정값(id, 이름)을 변수처럼 가져와서 쓸 수 있도록 해주는 훅 
    - useParams의 값은 문자열로 반환
  */
 /* find
    - 배열 메소드
    - 전체 배열을 돌면서 조건에 맞는 값을 딱 하나만 찾아서 반환
    - Number(id) -> useParams로 가져온 id는 항상 문자열('1') 데이터의 item.id는 보통 숫자이므로 두개의 데이터타입을 맞춰주기 위해서 Number로 형변환을 함
  */
  const { id } = useParams()
  const stay = stay.find((item) => item.id === Number(id));
  console.log('stay', stay)

  if(!stay) {
    return (
      <h2 style={{padding: '20px'}}>숙소 정보를 찾을 수 없습니다.</h2>
    )
  }
  return (
    <section className='sce-detail'>
      <div className="inner">
        <img src={stay.image} alt={stay.title} />

        <div className="text-wrap">
          <p className='category'>{stay.category}</p>
          <h2 className='title'>
            {stay.title} | <span>{stay.location}</span>
          </h2>
          <p className="desc">{stay.desc}</p>
          <p className="price">{stay.price.toLocaleString()}</p>

          <Link to='/'>목록으로 가기</Link>
        </div>
      </div>
    </section>
  )
}

