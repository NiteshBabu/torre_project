import React from 'react'

function Strengths({type, title, bgColor}) {
  return (
    <div className="my-2">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="d-flex justify-content-left flex-wrap">
      {
        type.map( t => <span key={t.id} className={`p-1 badge rounded-pill ${bgColor} text-white m-1`}>{t.name}</span>)
      }
      </div>
    </div>
  )
}

export default Strengths
