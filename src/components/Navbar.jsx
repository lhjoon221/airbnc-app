import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Navbar({ user, logout }) {
    const navigate = useNavigate();
    const location = useLocation();

  return (
    <nav>
        <ul>
            <li>
                <button 
                    className={location.pathname === '/' ? 'active' : ''}
                    onClick={()=>navigate('/')}>Explore
                </button>
            </li>
            {/* <li>
                <button 
                    className={location.pathname === '/detail/1' ? 'active' : ''}
                    onClick={()=>navigate('/detail')}>Detail
                </button>
            </li> */}
            <li>
                <button 
                    className={location.pathname === '/theme' ? 'active' : ''}
                    onClick={()=>navigate('/theme')}>Theme
                </button>
            </li>
            <li>
                <button 
                    className={location.pathname === '/room' ? 'active' : ''}
                    onClick={()=>navigate('/room')}>Room
                </button>
            </li>
            {/* login */}
            <li>
                {
                    user ? (
                        <>
                          <span style={{ marginRight: '10px'}}>{user.name}님</span>
                          <button onClick={logout}>로그아웃</button>
                        </>
                    ) : (
                        <button onClick={()=> navigate('/room')}>로그인</button>
                    )
                }
            </li>
        </ul>
    </nav>
  )
}
