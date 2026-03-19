export default function ThemeCard({ item, onClick }) {
  return (
    <li className='card' onClick={onClick} style={{ cursor: 'pointer' }}>
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="card-content">
        <span className='badge'>{item.category}</span>
        <h3>{item.title}</h3>
        <p className="desc">{item.text}</p>
        <div className="keywords">
          {item.keyword.map((k, i) => (
            <span key={i}>#{k}</span>
          ))}
        </div>
      </div>
    </li>
  );
}