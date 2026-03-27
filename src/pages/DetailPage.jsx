import React from 'react'
import { Link, useParams } from 'react-router-dom';
import stays from '../data/stay';

export default function DetailPage() {
  const { id } = useParams();
  const stay = stays.find((item) => item.id === Number(id));

  if (!stay) {
    return (
      <h2 style={{ padding: '40px' }}>숙소 정보를 찾을 수 없습니다.</h2>
    );
  }
  return (
    <section className='sec-detail'>
      <div style={wrapStyle} className='inner'>
        <img src={stay.image} alt={stay.title} style={imgStyle} />

        <div style={contentStyle}>
          <p style={categoryStyle}>{stay.category}</p>
          <h2> <span>{stay.location}</span>{stay.title} </h2>
          <p style={descStyle}>{stay.desc}</p>
          <strong>{stay.price.toLocaleString()}</strong>

          <Link to="/" style={backBtn}>목록으로 가기</Link>
        </div>
      </div>
    </section>
  )
}

const wrapStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '80px'

}
const imgStyle = {
  width: "100%",
  height: "450px",
  objectFit: "cover",
  borderRadius: "12px"
};

const contentStyle = {
  marginTop: "20px"
};

const categoryStyle = {
  display: "inline-block",
  padding: "6px 12px",
  background: "#cdcdcd",
  borderRadius: "8px",
  fontSize: "14px",
  marginBottom: '20px'
};

const descStyle = {
  margin: "20px 0",
  lineHeight: "1.6"
};

const backBtn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "10px 16px",
  background: "#222",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "8px"
};