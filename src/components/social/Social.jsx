import React from 'react'
import "./Social.scss"


function Social({ links }) {
  return (
    <div className="social col-sm-3">
      {
        links.map(link => {
          return (
          <a href={link.address} key={link.id} className="social__link">
            <i className={`bi bi-${link.name ? link.name : "link"}`}></i>
          </a>)
        })
      }
    </div>
  )
}

export default Social
