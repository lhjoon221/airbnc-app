const stays = [
  {
    id: 1,
    title: '서울 종로 감성 한옥 스테이',
    location: '서울 종로구',
    price: 125000,
    category: '한옥',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    desc: '전통적인 한옥 분위기와 따뜻한 조명이 어우러진 감성 숙소입니다.'
  },
  {
    id: 2,
    title: '해운대 푸른 바다 오션뷰',
    location: '부산 해운대구',
    price: 180000,
    category: '해변',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    desc: '창밖으로 바다가 펼쳐지는 오션뷰 숙소로 여행의 낭만을 즐기세요.'
  },
  {
    id: 3,
    title: '제주 서귀포 우드 하우스',
    location: '제주 서귀포시',
    price: 98000,
    category: '통나무집',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    desc: '우드톤 인테리어가 돋보이는 조용하고 아늑한 숲속 공간입니다.'
  },
  {
    id: 4,
    title: '강릉 모던 미니멀 스테이',
    location: '강원 강릉시',
    price: 110000,
    category: '도심',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    desc: '깔끔한 인테리어와 편안한 휴식이 가능한 모던 스타일 숙소입니다.'
  },
  {
    id: 5,
    title: '남해 조용한 어촌 마을',
    location: '경남 남해군',
    price: 85000,
    category: '해변',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
    desc: '파도 소리를 들으며 잠들 수 있는 조용한 해변가 숙소입니다.'
  },
  {
    id: 6,
    title: '강남 도심속 펜트하우스',
    location: '서울 강남구',
    price: 320000,
    category: '럭셔리',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    desc: '화려한 시티뷰와 최고급 시설을 갖춘 럭셔리 공간입니다.'
  },
  {
    id: 7,
    title: '경주 달빛 한옥 마을',
    location: '경북 경주시',
    price: 140000,
    category: '한옥',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
    desc: '역사가 숨쉬는 경주에서 즐기는 고즈넉한 한옥 체험입니다.'
  },
  {
    id: 8,
    title: '가평 강변 산책 오두막',
    location: '경기 가평군',
    price: 130000,
    category: '통나무집',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    desc: '북한강 옆 숲길 사이에 위치한 힐링 스테이입니다.'
  },
  {
    id: 9,
    title: '전주 경기전 옆 한옥',
    location: '전북 전주시',
    price: 95000,
    category: '한옥',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    desc: '전주 한옥마을 중심에서 느끼는 전통의 아름다움.'
  },
  {
    id: 10,
    title: '여수 밤바다 럭셔리 빌라',
    location: '전남 여수시',
    price: 210000,
    category: '해변',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    desc: '프라이빗 풀빌라에서 여수 밤바다의 정취를 느껴보세요.'
  },
  {
    id: 11,
    title: '홍대 힙한 디자인 하우스',
    location: '서울 마포구',
    price: 115000,
    category: '도심',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    desc: '젊음의 거리 홍대에 위치한 감각적인 디자인 하우스입니다.'
  },
  {
    id: 12,
    title: '양양 서퍼들의 천국',
    location: '강원 양양군',
    price: 89000,
    category: '해변',
    image: 'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?auto=format&fit=crop&w=800&q=80',
    desc: '서핑 비치가 바로 앞! 자유로운 영혼들을 위한 숙소.'
  },
  {
    id: 13,
    title: '평창 마운틴 뷰 콘도',
    location: '강원 평창군',
    price: 160000,
    category: '산',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    desc: '해발 700m 청정 공기를 마실 수 있는 산 전망 숙소입니다.'
  },
  {
    id: 14,
    title: '인천 영종도 에어포트 스테이',
    location: '인천 중구',
    price: 75000,
    category: '도심',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    desc: '여행 전후 편하게 쉴 수 있는 가성비 최고의 공항 근처 숙소.'
  },
  {
    id: 15,
    title: '통영 바다위 수상가옥',
    location: '경남 통영시',
    price: 190000,
    category: '해변',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    desc: '이색적인 바다 위 숙소에서 낚시와 휴식을 동시에 즐기세요.'
  },
  {
    id: 16,
    title: '대구 동성로 시티 로프트',
    location: '대구 중구',
    price: 105000,
    category: '도심',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    desc: '복층 구조의 세련된 인테리어가 돋보이는 도심형 숙소.'
  },
  {
    id: 17,
    title: '담양 대나무 숲길 펜션',
    location: '전남 담양군',
    price: 145000,
    category: '산',
    image: 'https://images.unsplash.com/photo-1591086633860-92ac941bb0e8?auto=format&fit=crop&w=800&q=80',
    desc: '창문을 열면 시원한 대나무 숲이 펼쳐지는 힐링 명소.'
  },
  {
    id: 18,
    title: '포항 일출 명소 빌라',
    location: '경북 포항시',
    price: 135000,
    category: '해변',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
    desc: '테라스에서 수평선 너머로 떠오르는 일출을 감상하세요.'
  },
  {
    id: 19,
    title: '송도 센트럴파크 스테이',
    location: '인천 연수구',
    price: 175000,
    category: '도심',
    image: 'https://images.unsplash.com/photo-1631729779674-1f369e1116b4?auto=format&fit=crop&w=800&q=80',
    desc: '미래 도시 같은 송도의 야경을 즐길 수 있는 고층 호텔식 숙소.'
  },
  {
    id: 20,
    title: '충주 호수 앞 글램핑',
    location: '충북 충주시',
    price: 120000,
    category: '캠핑',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80',
    desc: '캠핑의 감성과 호텔의 편리함을 갖춘 호수 전망 글램핑.'
  }
];
export default stays