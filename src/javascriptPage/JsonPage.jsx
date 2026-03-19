import React, { useEffect, useState } from 'react'

export default function JsonPage() {
    /* 1. 데이터가 담길 저장소 */
    const [stay, setStay] = useState([]);
    /* 로딩상태 선언 */
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //2. 데이터를 요청 -> fetch구문
        //JSON 파일을 public 폴더 -> /stays.json으로 접근
        fetch('http://localhost:3001/stays')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('데이터를 가져오지 못했습니다.')
                }
                return response.json(); //응답데이터를 JSON으로 변환
            })
            .then((data) => {
                //3. 받아온 데이터를 상태(useState)에 저장
                console.log(data)
                setStay(data);
                setLoading(false); //로딩끝
            })
            .catch((error) => {
                console.log('Error:', error)
                setLoading(false);
            })
    }, []); //[]:컴포넌트가 처음 화면에 나타날 때 한번만 실행

    if (loading) return <div>데이터를 불러오는 중입니다...</div>;
    return (
        <div>
            <h1>JsonPage</h1>
            <ul>
                {
                    stay.map((stay) => (
                        <li key={stay.id}>
                            <strong>{stay.title}</strong> - {stay.price.toLocaleString()}원
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
