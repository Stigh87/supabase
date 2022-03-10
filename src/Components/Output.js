import React from 'react'
import './Components.css';

export default function Output(prop) {
  
  return (
    <div className='outputs'>
        <div>{prop.firstname}</div><div>{prop.lastname}</div><div>{prop.username}</div><div>{prop.email}</div>
    </div>
  )
}
