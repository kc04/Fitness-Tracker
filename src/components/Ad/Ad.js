import React from 'react'
import './Ad.css'

function Ad(props) {
  return (
  



<div className="card">
<div className="container row ">
<div className="col-sm-2 buffer-top row">
        <a href={props.link}><img width="100" height="100" className="img-responsive img-center" src={props.image} alt={props.alt} /></a>
      </div>
 
  <div className="col-sm-4 row">
        <h4>{props.title}</h4>
        <p>{props.children}</p>
      </div>

      </div>
</div>
  )
}

export default Ad
