import React from 'react'
import avatar from '../../assets/avatar.svg'
const Avatar = () => {
  return (
    <div>
        <img src={avatar} alt='Avatar' style={{width:'90px',height:'120px'}}></img>
    </div>
  )
}

export default Avatar