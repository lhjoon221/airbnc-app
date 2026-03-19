import React from 'react'
import { Link } from 'react-router-dom'


export default function StayCard({ stay }) {
  return (
    <Link to={`/detail/${stay.id}`}>
      <div style={CardStyle}>
        <span>{stay.category}</span>
        <figure style={imgStyle}>
          <img src={stay.image} alt={stay.title} />
        </figure>

        <div style={contentStyle}>
          <h3>{stay.title}</h3>
          <p className="location">{stay.location}</p>
          <p className="desc">{stay.desc}</p>

          <p className="price">{stay.price.toLocaleString()}원</p>
        </div>
      </div>
    </Link>
  )
}

const CardStyle = {
  border: '1px solid #cdcdcd',
  borderRadius: '10px',
  background: '#fff',
  boxShadow: '0 2px 12px rgba(0,0,0,.25)'
}

const imgStyle = {
  overflow: 'hidden',
  height: '220px',
  marginBottom: '25px'
}

const contentStyle = {
  padding: '20px'
}