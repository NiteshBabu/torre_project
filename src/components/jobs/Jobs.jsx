import React from 'react'

function Jobs({ jobs }) {
  return (
    <div>
      <h1 className="text-center">Jobs</h1>
      {
        jobs.map(job => {
          return (
            <div className="jobs border-bottom" key={job.id}>
              <h5>{job.name}</h5>
              {job.organizations.map(o => {
                return (
                  <div className="organisation d-flex my-1 p-1 justify-content-between align-items-center text-white" key={o.id}>
                    <img src={o.picture} style={{width : "30px", height : "30px", borderRadius : "50%"}} />
                    <small className="fw-bold">{o.name}</small>
                    <small>From - {`${job.fromMonth}-${job.fromYear}`}</small>
                  </div>
                )
              })}
            </div>
          )
        })
      }
    </div>
  )
}

export default Jobs

