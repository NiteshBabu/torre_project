import React from 'react'
import "./Profile.scss"

import Social from "../social/Social"

function Profile({ person }) {
  return (
    <div className="profile col-sm-12">
      <div className="row">
        {
          person.pictureThumbnail ?
          <img className="profile__pic col-sm-12 m-auto" src={person.pictureThumbnail} alt="profile_picture" /> :
          <i className="bi bi-person-circle text-center"></i>
        }
        <div className="profile__details col-sm-12 text-white">
          <div className="profile__name d-flex align-items-center justify-content-between">
            <h1>{person.name}</h1>
            <p className="badge rounded-pill bg-success text-center">{person.publicId}</p>
          </div>
          <h5 className="fst-italic">{person.professionalHeadline}</h5>
          {
            person.location && 
            <div className="location">
              <p className="text-center border-bottom fw-bold" style={{color : "chocolate"}}>{person.location.name}</p>
            </div>
          }
          <Social links={person.links} />
          <div className=" text-center font-monospace">
            <h5>!! Know Me !!</h5>
            <p>{person.summaryOfBio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
