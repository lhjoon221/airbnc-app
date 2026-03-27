import React, { useEffect, useState } from "react";
import "../css/Theme.css";
import ThemeCard from "../components/ThemeCard"; // 1. 컴포넌트 불러오기

export default function ThemePage() {
  const [themeList, setThemeList] = useState([]);
  const [category, setCategory] = useState("전체");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

  // --- 모달을 위한 상태 추가 ---
  const [selectedItem, setSelectedItem] = useState(null); // 클릭한 숙소 정보 저장

  const categories = ["전체", "자연", "감성숙소", "로맨틱", "맞춤숙소"];

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}themes.json`)
      .then(res => res.json())
      .then(data => setThemeList(data));
  }, []);

  // 4. 필터링 (에러 방지를 위해 안전장치 추가)
  let result = themeList.filter(item => {
    const sameCategory = category === "전체" || item.category === category;
    const text = search.toLowerCase();
    const sameSearch =
      (item.title || "").toLowerCase().includes(text) ||
      (item.text || "").toLowerCase().includes(text) ||
      (item.keyword?.join("") || "").toLowerCase().includes(text);

    return sameCategory && sameSearch;
  });

  // 5. 정렬
  if (sort === "latest") {
    result.sort((a, b) => b.id - a.id);
  } else if (sort === "name") {
    result.sort((a, b) => a.title.localeCompare(b.title, "ko"));
  }

  return (
    <section className="sec-theme">
      <div className="inner">
        {/* 상단 타이틀 및 검색/필터 영역 (기존과 동일) */}
        <div className="title-box">
          <h2>테마숙소</h2>
          <p className="sub-title">취향에 맞는 공간에서, 당신만의 특별한 하루를 만나보세요.</p>
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="검색"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input-search"
          />
        </div>

        <div className="filter-area">
          <p>총 {result.length}개</p>
          <div className="filter">
            <div className="category-box">
              {categories.map((item, i) => (
                <button key={i} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>
                  {item}
                </button>
              ))}
            </div>
            <select onChange={e => setSort(e.target.value)}>
              <option value="latest">최신순</option>
              <option value="name">이름순</option>
            </select>
          </div>
        </div>

        {/* 2. 카드리스트 영역: ThemeCard 컴포넌트 사용 */}
        <ul className="card-list">
          {result.map(item => (
            <ThemeCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)} // 클릭하면 해당 데이터를 상태에 저장
            />
          ))}
        </ul>

        {/* 3. 모달창 영역 (selectedItem이 있을 때만 보임) */}
        {selectedItem && (
          <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation}>
              <button className="close-btn" onClick={() => setSelectedItem(null)}>
                X
              </button>
              <img src={`${import.meta.env.BASE_URL}${selectedItem.image}`} />
              <h2>{selectedItem.title}</h2>
              <span className="badge">{selectedItem.category}</span>
              <p>{selectedItem.text}</p>
              <div className="modal-keywords">
                {selectedItem.keyword.map((k, i) => (
                  <span key={i}>#{k} </span>
                ))}
              </div>
              <button className="reserve-btn">예약하기</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
