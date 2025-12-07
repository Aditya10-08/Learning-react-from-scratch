import React from 'react'
import RightCard from './RightCard'

const ImageContainer = (props) => {
  return (
    <div className='scrollbar-hide h-full rounded-4xl w-2/3 flex flex-nowrap gap-6 p-6 overflow-x-auto'>
        {props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
        })}
    </div>
  )
}

export default ImageContainer