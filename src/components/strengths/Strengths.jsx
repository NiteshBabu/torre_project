import React from 'react'

function Strengths({strengths}) {
  return (
    <div className="card">
      <div className="title">
        <p>Strengths</p>
      </div>
      <div className="d-flex flex-column justify-content-center">
      {
        strengths.map( s => <span key={s.id} className="badge badge-pill badge-primary">{s.name}</span>)
      }
      </div>
    </div>
  )
}

export default Strengths
