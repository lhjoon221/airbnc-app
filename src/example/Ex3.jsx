import React from 'react'

/* return에서 선언 */
export default function Ex3() {
    const loginName = 'user'
  return (
    <>
      <div>
        {
            loginName === "user" ? (
                <div>환영합니다. user!</div>
            ) : (
                <div>로그인해주세요</div>
            )
        }
      </div>
    </>
  )
}
