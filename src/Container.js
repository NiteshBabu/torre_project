import React, { useState } from 'react'
import Search from './components/search/Search'
import Profile from './components/profile/Profile'
import Header from './components/header/Header'
import "./Container.scss"

function Container() {

  const [user, setUser] = useState(null)
  const [errText, setErrText] = useState(null)

  console.log(user)

  return (
    <div>
      <Header />
      <div className="container">
        <Search setUser={setUser} setErrText={setErrText} />
        {errText && <p>{errText}</p>}
        {user ? <Profile {...user}  /> : null}
      </div>
      
    </div>
  )
}

export default Container
