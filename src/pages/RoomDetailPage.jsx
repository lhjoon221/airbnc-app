import React from 'react';
import { useParams, Link } from 'react-router-dom';
import rooms from '../data/rooms.js';
import ReviewBox from '../components/ReviewBox.jsx';
import "../css/RoomDetailPage.css"; 

export default function RoomDetailPage() {
    const { id } = useParams();
    
    // 2. 데이터 찾기: id가 숫자라면 Number(id), 문자라면 id로 비교
    const room = rooms.find((item) => item.id === Number(id));

    // 데이터가 없을 경우 처리
    if (!room) {
        return (
            <section className="sec-room-detail">
                <div className="inner">
                    <h2>객실 정보를 찾을 수 없습니다.</h2>
                    <Link to="/room" className="btn-back">객실 목록으로 돌아가기</Link>
                </div>
            </section>
        );
    }

    return (
        <section className="sec-room-detail">
            <div className="inner">
                <div className="page-title">
                    <h2>AirBnc 객실</h2>
                    <p className="sub-title">AirBnc의 가장 인기있는 객실을 만나보세요.</p>
                </div>
                
                {/* 3. 이미지 출력: 데이터의 속성명이 'image'이므로 room.image로 작성 */}
                <figure className='detail-image'>
                    <img src={`${import.meta.env.BASE_URL}${room.image.replace("/", "")}`} alt={room.title}/>
                </figure>

                <div className="detail-contents">
                    <h3>{room.title}</h3>
                    <p className="desc">{room.desc}</p>
                    <p className="detail">{room.detail}</p>
                    <div className="info-area">
                        <span>{room.info}</span>
                    </div>
                    <div className="util">
                        {/* 데이터에 이미 '원'이 포함된 문자열이면 toLocaleString() 제외 */}
                        <strong>{room.price}</strong>
                        <div className="service-area">
                            {room.service && room.service.map((item, i) => (
                                <span key={i}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 리뷰 섹션 */}
                <ReviewBox />
            </div>
        </section>
    );
}
