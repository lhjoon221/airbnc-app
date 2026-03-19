import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/Theme.css'
import ThemeCard from '../components/ThemeCard';

export default function ThemePage() {
  //1. 상태관리 변수 만들기
  const [themeList, setThemeList] = useState([]) //화면리스트
  const [category, setCategory] = useState('전체'); //카테고리별정렬
  const [search, setSearch] = useState(''); //검색입력란
  const [sort, setSort] = useState('latest'); //정렬

  /* 모달 상태관리 */
  const [selectedItem, setSelectedItem] = useState(null); //클릭한 숙소 정보를 저장

  //2. 카테고리 목록
  const categories = ['전체', '자연', '감성숙소', '로맨틱', '맞춤숙소']

  //3. JSON 불러오기
  useEffect(() => {
    fetch('/themes.json')
      .then((res) => res.json())
      .then((data) => {
        setThemeList(data)
      })
  }, [])
  //console.log(themeList)

  //4. 필터링
  let result = themeList.filter((item) => {
    //카테고리 조건
    const sameCategory =
      category === '전체' || item.category == category

    //검색조건
    const text = search;
    console.log(text)

    const sameSearch =
      item.title.includes(text) ||
      item.text.includes(text) ||
      item.keyword.join('').toLowerCase().includes(text);

    return sameCategory && sameSearch
  })

  /* 
    정렬
    a - b = 양수(1) - 자리를 바꿈
    a - b = 0, 음수(-1) - 자리를 그대로 유지 
  */
  if (sort === 'latest') {
    result.sort((a, b) => b.id - a.id);
  } else if (sort === 'name') {
    result.sort((a, b) => a.title.localeCompare(b.title, 'ko'))
  }
  return (
    <section className="sec-theme">
      <div className="inner">
        <div className="title-box">
          <h2>테마숙소</h2>
          <p className="sub-title">취향에 맞는 공간에서, 당신만의 특별한 하루를 만나보세요.</p>
        </div>

        {/* 검색 */}
        <input
          type="text"
          placeholder='검색'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 카테고리버튼 */}
        <div className="category-box">
          {
            categories.map((item, i) => (
              <button
                type='button'
                key={i}
                className={category === item ? 'active' : ''}
                onClick={() => setCategory(item)}>{item}</button>
            ))
          }

          {/* 정렬 */}
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="latest">최신순</option>
            <option value="name">이름순</option>
          </select>

          {/* 결과 */}
          <p>총 {result.length}개</p>

          {/* 카드리스트 */}
          <ul className="card-list">
            {
              result.map((item) => (
                <ThemeCard
                  key={item.id}
                  item={item}
                  onCLick={() => setSelectedItem(item)} //클릭하면 해당 데이터 상태를 저장
                />
              ))
            }
          </ul>

          {/* tab */}
          <Tabs>
            <TabList>
              <Tab>예약안내</Tab>
              <Tab>환불정책</Tab>
            </TabList>

            <TabPanel>
              <h2>예약은 반드시 하시고, 예약 취소 시 환불 안됩니다.</h2>
            </TabPanel>
            <TabPanel>
              <h2>없습니다.</h2>
            </TabPanel>
          </Tabs>

          {/* 모달창 영역(selectedItem이 있어야만 보임) */}
          {
            selectedItem && (
              <div className='modal-overlay' onClick={() => setSelectedItem(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className='btn-close' onClick={() => setSelectedItem(null)}>X</button>

                  <img src={selectedItem.image} alt={selectedItem.title} />
                  <h3>
                    {selectedItem.title}
                    <span className="badge">{selectedItem.category}</span>
                  </h3>
                  <p className="desc">{selectedItem.text}</p>
                  <div className="modal-keywords">
                    {selectedItem.keyword.map((k, i) =>
                      <span key={i}>{k}</span>
                    )}
                  </div>
                  <button className="reseve-btn">예약하기</button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}
