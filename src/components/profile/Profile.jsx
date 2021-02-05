import React from 'react'
import "./Profile.scss"

import Social from "../social/Social"

function Profile({ person }) {
  return (
    <div className="profile card col-sm-12">
      <div className="row">
        {
          person.pictureThumbnail ?
          <img className="profile__pic col-sm-12 m-auto" src={person.pictureThumbnail} alt="profile_picture" /> :
          <i className="bi bi-person-circle text-center"></i>
        }
        <div className="profile__details col-sm-12 text-white">
          <h1>{person.name}</h1>
          <span>{person.publicId}</span>
          <h5>{person.professionalHeadline}</h5>
          {
            person.location && 
            <div className="location">
              <p>{person.location.name}</p>
            </div>
          }
          <div className="bio">
            <p>{person.summaryOfBio}</p>
          </div>
          <Social links={person.links} />
        </div>
      </div>
    </div>
  )
}

export default Profile
