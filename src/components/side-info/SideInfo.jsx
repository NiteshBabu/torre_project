import React from 'react'
import "./SideInfo.scss"

function SideInfo({ person }) {
  return (
    <div className='d-none d-md-block col-md-3 sideinfo my-2' >
      <h4 className="text-center my-3">{person.name}</h4>
      <div className="profile-pic">
        {
          person.picture ?
            <img src={person.picture} /> :
            <i className="bi bi-person-circle text-white"></i>
        }
      </div>
    </div>
  )
}

export default SideInfo
