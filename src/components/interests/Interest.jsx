import React from 'react'

function Interests({ interests }) {
  return (
    <div className="card">
      <div className="title">
        <p>Interests</p>
      </div>
      <div className="d-flex flex-column justify-content-center">
        {
          interests.map(s => <span key={s.id} className="badge badge-pill badge-primary">{s.name}</span>)
        }
      </div>
    </div>
  )
}

export default Interests