import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='rounded-full bg-white h-8 w-8 flex items-center justify-center font-semibold text-lg'>{props.id+1}</h2>
        <div>
            <p className='leading-relaxed text-gray-200 mb-6 text-shadow-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sequi cum nulla porro autem quam tenetur, dolorem facere!</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-7 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-3 py-2 rounded-full cursor-pointer'><i className="ri-arrow-right-fill"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent