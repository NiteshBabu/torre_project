import React from 'react'
import "./Carousel.scss"

function Caraousel(props) {
  return (
    <div id="profile-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="item">
            {props.children[0]}
          </div>
        </div>
        <div className="carousel-item">
          <div className="item">
            {props.children[1]}
          </div>
        </div>
        <div className="carousel-item">
          <div className="item">
            {props.children[2]}
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#profile-carousel" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#profile-carousel" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
</div>
  )
}
export default Caraousel
