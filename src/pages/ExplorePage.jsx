//Explore.jsx
import React from 'react'
import StayCard from '../components/StayCard'
import stays from '../data/Stay'
import '../App.css'
import { useState } from 'react'

export default function ExplorePage() {
  const [limit, setLimit] = useState(8);
  //console.log(limit)
  console.log(stays)

  const showMore = () => {
    setLimit(limit+8);
  }
  return (
    <section className='container'>
      <div className="inner">
        <h2>일상이 여행이 되는 공간들</h2>
        <p className="subtitle">잠시 멈춰가고 싶은 당신에게, 가장 어울리는 휴식을 제안합니다.</p>
        <div className="card-list">
          {
            stays.slice(0, limit).map((stay) => (
              <StayCard key={stay.id} stay={stay}/>
            ))
          }
          { /* 데이터가 남았을 때만 더보기 버튼 */
            limit < stays.length && (
              <div style={{
                textAlign: 'center',
                marginTop: '30px'
              }}>
                <button onClick={showMore} className='btn-more'>더보기</button>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}
