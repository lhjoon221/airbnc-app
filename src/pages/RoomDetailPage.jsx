import React from 'react'
import { useParams, Link } from 'react-router-dom'
import rooms from '../data/rooms.js'

export default function RoomDetailPage() {
    const { id } = useParams()
    const room = rooms.find((item) => item.id === Number(id))
    console.log(room)

    /* 데이터 없을 때 */
    if (!room) {
        return (
            <section className="sec-room-detail">
                <div className="inner">
                    <h2>객실 정보를 찾을 수 없습니다.</h2>
                    <Link to="/room" className="btn-back">객실 목록으로 돌아가기</Link>
                </div>
            </section>
        )
    }
    return (
        <section className="sec-room-detail">
            <div className="inner">
                <div className="page-title">
                    <h2>AirBnc 객실</h2>
                    <p className="sub-title">
                        AirBnc의 가장 인기있는 객실을 만나보세요.
                    </p>
                </div>
                
                <figure className='detail-image'>
                    <img src={room.img} alt={room.title}/>
                </figure>

                <div className="detail-contents">
                    <h3>{room.title}</h3>
                    <p className="desc">{room.desc}</p>
                    <p className="detail">{room.detail}</p>
                    <div className="info-area">
                        <span>{room.info}</span>
                    </div>
                    <div className="util">
                        <strong>{room.price.toLocaleString()}원</strong>
                        <div className="sevice-area">
                              {
                            room.service.map((item, i) => (
                                <span key={i}>{item}</span>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
