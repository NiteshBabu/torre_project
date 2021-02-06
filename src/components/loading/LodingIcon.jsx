import React from 'react'
import loadingIcon from "./loading.gif";

function LodingIcon() {
  return (
    <div className='d-flex loading-wrapper'>
      <img className='loading-icon m-auto' src={loadingIcon} />
    </div>
  )
}

export default LodingIcon
