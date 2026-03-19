import React from 'react'
import Map from './javascriptPage/Map.jsx'

/* 
  map: 게시글 목록, 메뉴리스트, 목록으로 되어있는 리스트는 대부분 map으로 출력
*/

export default function Map() {
    //const fruits = ['사과', '배', '딸기']
    //console.log(fruits)
    //const menuItem = ['About', '테마숙소', '감성숙소', '예약하기']
    //console.log(menuItem)
    //console.log(JSON.stringify(Stay)); //js파일을 json 형태로 변환
    return (
        <div>
            <ul>
                {/* 배열의 개수만큼 li로 구현 */}
                {
                    fruits.map((fruits, index) => (
                        <li key={index}>
                            {fruits}
                        </li>
                    ))
                }
            </ul>

            {/* map으로 navigation 만들기 */}
            <nav style={{backgroundColor: '#f4f4f4', padding: '1rem'}}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignITems: 'center',
                    gap: '100px'
                }}>
                    {/* menuItem을 map함수로 반복구현 */}
                    {
                        menuItem.map((menu, i)=> (
                            <li key={i} style={{cursor: 'pointer'}}>
                                {menu}
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/* 데이터를 map으로 출력 */}
            <div className="stay" style={{
                display:'grid', 
                width:'1080px', 
                margin:'50px auto', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '25px'}}>
            {
                Stay.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <span>{item.category}</span>
                        <img src={item.image} alt={item.title} />
                        <p>{item.price}</p>
                        <p>{item.desc}</p>
                    </div>
                ))
            }        
                </div>
        </div>

    )
}
