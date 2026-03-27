//최종
import React, { useState } from 'react'
import styled from 'styled-components'

/* 
    스타일 정의
        style component(스타일컴포넌트)
        = 컴포넌트 + 스타일 */
const ReviewList = styled.div`
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 15px;
        margin-bottom: 30px
    `

export default function ReviewBox() {
    //리뷰목록
    const [reviews, setReviews] = useState([
        { id: 1, writer: '게스트', text: '가족끼리 조용하고 편안하게 쉬었다갑니다.' },
        { id: 2, writer: '조아영', text: '힐링하기에 딱 좋습니다. 가격도 착하고 공간은 더 착해요. 자주 올게영' },
    ])

    //작성 input (생성)
    const [writer, setWriter] = useState('')
    const [text, setText] = useState('')

    //수정
    const [editId, setEditId] = useState(null)
    const [editWriter, setEditWriter] = useState('')
    const [editText, setEditText] = useState('')

    //에러메세지
    const [errorMessage, setErrorMessage] = useState('')

    //리뷰추가
    const addReview = () => {
        if (writer.trim() === '' || text.trim() === '') {
            setErrorMessage('이름과 리뷰 내용을 모두 입력해주세요');
            return
        }

        const newReview = {
            id: Date.now(),
            writer: writer,
            text: text
        }
        setReviews([...reviews, newReview])
        setWriter('')
        setText('')
        setErrorMessage('')
    }

    //리뷰삭제
    const deleteReview = (id) => {
        const upDatedReviews = reviews.filter((review) => review.id != id);
        setReviews(upDatedReviews)
    }

    //수정 폼 열기
    const openEdit = (review) => {
        setEditId(review.id)
        setEditWriter(review.writer)
        setEditText(review.text)
    }

    //수정 저장
    const saveEdit = () => {
        if (editWriter.trim === '' || editText.trim() === '') {
            alert('수정할 이름과 내용을 입력해주세요')
            return
        }

        const upDatedReviews = reviews.map((review) =>
            review.id === editId ?
                { ...review, writer: editWriter, text: editText }
                : review
        )
        setReviews(upDatedReviews)
        setEditId(null)
        setEditWriter('')
        setEditText('')
    }

    //수정취소
    const cancelEdit = () => {
        setEditId(null)
        setEditWriter('')
        setEditText('')
    }

    return (
        <section className="sec-review" style={{ marginTop: '60px' }}>
            <div className="inner">
                <h2>AirBnd Review</h2>
                <p className="sub-title">많은 분들의 리뷰를 확인해주세요.</p>

                <ReviewList className='review-list'>
                    <h4 style={{ marginBottom: '15px' }}>리뷰작성</h4>
                    {
                        errorMessage && (
                            <p style={{ color: 'crimson', marginBottom: '10px' }}>
                                {errorMessage}
                            </p>
                        )
                    }
                    <input
                        type="text"
                        placeholder="작성자 이름"
                        value={writer}
                        onChange={(e) => setWriter(e.target.value)}
                        style={{
                            width: '100%',
                            height: '40px',
                            marginBottom: '10px',
                            padding: '0 10px',
                            border: '1px solid #ccc',
                            borderRadius: '8px'
                        }}
                    />

                    <textarea
                        placeholder="리뷰를 입력해주세요"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows="4"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            resize: 'none'
                        }}
                    />

                    <button
                        onClick={addReview}
                        style={{
                            marginTop: '12px',
                            padding: '10px 16px',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        리뷰 등록
                    </button>
                </ReviewList>

                {/* 리뷰 목록 */}
                <div>
                    {reviews.length === 0 ? (
                        <p>아직 등록된 리뷰가 없습니다.</p>
                    ) : (
                        reviews.map((review) => (
                            <div
                                key={review.id}
                                style={{
                                    borderBottom: '1px solid #eee',
                                    padding: '20px 0'
                                }}
                            >
                                {editId === review.id ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={editWriter}
                                            onChange={(e) => setEditWriter(e.target.value)}
                                            style={{
                                                width: '100%',
                                                height: '40px',
                                                marginBottom: '10px',
                                                padding: '0 10px',
                                                border: '1px solid #ccc',
                                                borderRadius: '8px'
                                            }}
                                        />

                                        <textarea
                                            rows="4"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                border: '1px solid #ccc',
                                                borderRadius: '8px',
                                                resize: 'none'
                                            }}
                                        />

                                        <div style={{ marginTop: '10px' }}>
                                            <button
                                                onClick={saveEdit}
                                                style={{
                                                    marginRight: '10px',
                                                    padding: '8px 14px',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                저장
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                style={{
                                                    padding: '8px 14px',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    background: '#3a3a3a'
                                                }}
                                            >
                                                취소
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h5 style={{ marginBottom: '8px' }}>{review.writer}</h5>
                                        <p style={{ marginBottom: '12px' }}>{review.text}</p>

                                        <button
                                            onClick={() => openEdit(review)}
                                            style={{
                                                marginRight: '10px',
                                                padding: '8px 14px',
                                                border: '1px solid #ccc',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                background: '#b8372e'
                                            }}
                                        >
                                            수정
                                        </button>

                                        <button
                                            onClick={() => deleteReview(review.id)}
                                            style={{
                                                padding: '8px 14px',
                                                border: 'none',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                background: "#6b6b6b"
                                            }}
                                        >
                                            삭제
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
