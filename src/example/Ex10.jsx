import React, { useState } from 'react'

export default function Ex10() {
    let [fruit, setFruit] = useState(['사과', '복숭아', '참외'])
    let [modal, setModal] = useState(false); //모달 열리고 닫힘
    let [title, setTitle] = useState(0); //클릭한 과일번호 저장
    return (
        <div>
            <h1>청년 과일 다방</h1>
            {
                fruit.map((item, i) => {
                    return (
                        <div style={listStyle} key={i}>
                            <h4 onClick={()=> {
                                setModal(true); //모달 열기
                                setTitle(i); //몇번째 과일을 클릭했는지 i를 저장
                            }}>{item}</h4>
                        </div>
                    )
                })
            }

            {/* modal 상태가 true일때만 Modal 콤퍼넌트가 활성화=show */}
            {modal === true ? <Modal title={title} fruit={fruit} setModal={setModal} /> : null}
        </div>
    )
}

function Modal({title, fruit, setModal}) {
    return (
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <h4>상세내용: {fruit[title]}</h4>
                <p>일자: 3월 17일</p>
                <p>달콤한 과일향과 과즙이 너무 예술이에요</p>
                <button onClick={()=>setModal(false)}>닫기</button>
            </div>
        </div>
    )
}
const listStyle = {
    maxWidth: '640px',
    border: '1px solid #cdcdcd',
    padding: '15px',
    textAlign: 'center',
    margin: '50px auto'
}
const modalStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const modalContentStyle = {
    background: 'white',
    padding: '25px',
    borderRadius: '10px'
}