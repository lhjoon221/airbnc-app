import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import DetailPage from './pages/DetailPage'
import ExplorePage from './pages/ExplorePage'
import RoomPage from './pages/RoomPage'
import ThemePage from './pages/ThemePage'
import Hero from './components/Hero'
import RoomDetailPage from './pages/RoomDetailPage'


function App() {
  const [user, setUser] = useState(null)

  /* 로그인 함수 */
  function login(inputId, inputPwd) {
    const saveId = 'admin';
    const savePwd = '1234';

    if (inputId === saveId && inputPwd === savePwd) {
      setUser({
        id: inputId,
        name: '크리스',
        email: 'guest@mail.com'
      });
      return true
    }
    return false
  }

  /* 로그아웃 */
  function logout() {
    setUser(null)
  }

  return (
    <main className='main'>
      <Header user={user} logout={logout} />
      <Hero />

      <Routes>
        <Route path='/' element={<ExplorePage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/theme' element={<ThemePage />} />
        <Route path='/room' element={<RoomPage user={user} login={login} logout={logout} />}  />
        <Route path='/room/:id' element={<RoomDetailPage />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
