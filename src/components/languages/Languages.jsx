import React from 'react'

function Languages({languages}) {
  return (
    <div>
      <h3>Languages</h3>
      <div className="d-flex flex-wrap justify-content-start align-items-center">
      {
        languages.map(l =>{
          return(
            <div className="language badges bg-dark rounded-pill text-center m-1 p-2 text-white fw-bold" key={l.code}>
              <p className="capitalize m-auto">{l.language} - {l.fluency}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Languages
