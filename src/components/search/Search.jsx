import React, { useState, useEffect } from 'react'
import "./Search.scss"

function Search({ setUser, setErrText }) {

  const [searchText, setSearchText] = useState("Niteshbabusharma")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/proxy/bios/${searchText}`)
      const data = await response.json()
      if (response.status === 200) {
        setUser(data)
        setErrText(null)
      }
      else {
        setUser(null)
        setErrText(data.message)
      }
    }
    fetchData()
  }, [searchText])


  return (
    <div className="col-sm-12 text-center my-4 p-4">
      <div className="search-wrapper">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input type="search" placeholder="niteshbabusharma" onChange={e => setSearchText(e.target.value)} />
      </div>
      <small className="text-white">Search By Username</small>
    </div>
  )
}

export default Search
