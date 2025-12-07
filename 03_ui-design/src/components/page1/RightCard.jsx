import React from 'react'
import RightCardContent from './RightCardContent'


const RightCard = (props) => {
  return (
    <div className='h-full w-72 shrink-0 rounded-4xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src={props.img} alt="img" />
        <RightCardContent id={props.id} tag={props.tag} desc={props.desc} color={props.color}/>
    </div>
  )
}

export default RightCard