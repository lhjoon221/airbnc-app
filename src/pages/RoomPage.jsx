//Roompage
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import rooms from '../data/rooms'

export default function RoomPage({ user, login, logout }) {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [message, setMessage] = useState('');

  console.log(rooms);

  function submitLogin(e) {
    e.preventDefault();

    const result = login(inputId, inputPwd);

    if (result) {
      setMessage('로그인 성공')
      setInputId('');
      setInputPwd('');
    } else {
      setMessage('아이디 또는 비밀번호가 다릅니다')
    }
  }

  return (
    <section className='sec-roompage'>
      <div className="inner">
        <div className="page-title">
          <h2>Room &amp; My Page</h2>
          <p className="sub-title">
            객실정보와 내 정보를 한 곳에서 확인하세요.
          </p>
        </div>

        {!user ? (
          <div className="login-box">
            <h3>로그인</h3>
            <p className="login-info">테스트계정:admin / 1234</p>

            <form onSubmit={submitLogin}>
              <input
                type="text"
                placeholder='아이디'
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
              />
              <input
                type="password"
                placeholder='비밀번호'
                value={inputPwd} // 이 값과
                onChange={(e) => setInputPwd(e.target.value)} // 이 함수가 짝이 맞아야 합니다!
              />
              <button type='submit'>로그인</button>
            </form>

            {message && <p className='message'>{message}</p>}
          </div>
        ) : (
          <div className="mypage-box">
            <div className="mypage-top">
              <h3>{user.name}님의 마이페이지</h3>
              <p>{user.email}</p>
            </div>

            <div className="mypage-info">
              <div className="info-card">
                <h4>예약 내역</h4>
                <p>2건의 예약이 있습니다.</p>
              </div>
              <div className="info-card">
                <h4>찜한 숙소</h4>
                <p>3개의 숙소를 저장했습니다.</p>
              </div>
              <div className="info-card">
                <h4>최근 본 객실</h4>
                <p>오션 뷰 테라스룸 외 2건</p>
              </div>
              <button onClick={logout} className='logout-btn-main'>로그아웃</button>
            </div>
          </div>
        )
        }

        <div className="room-intro">
          <div className="page-title">
            <h2>AirBnc 객실</h2>
            <p className="sub-title">
              AirBnc의 가장 인기있는 객실을 만나보세요.
            </p>
          </div>

          <div className="room-list">
            {
              rooms.map((room) => (
                <div key={room.id} className='room-card'>
                  <figure className='room-img'>
                    <img src={room.image} alt={room.title} />
                  </figure>
                  <div className="room-content">
                    <h4>{room.title}</h4>
                    <p className="desc">{room.desc}</p>
                    <p className="info">{room.info}</p>

                    <Link to={`/room/${room.id}`} className='btn-detail'>객실 상세보기</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>


      </div>
    </section>
  )
}
