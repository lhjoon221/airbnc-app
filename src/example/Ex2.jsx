import React from 'react'

/* return 밖에서 선언 */
export default function Ex2() {
    let res = '';
    const loginName = 'user'
    if (loginName === 'user') {
        res = <div>환영합니다 user님</div>
    } else {
        res = <div>로그인해주세요</div>
    }
  return (
    <div>{res}</div>
  )
}
