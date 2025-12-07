import React from 'react'
import LeftText from './leftText'
import ImageContainer from './ImageContainer'

const Page1Content = (props) => {
  return (
    <div className='py-4 px-18 flex items-center gap-10 h-[600px]'>
        <LeftText />
        <ImageContainer users={props.users} />
    </div>
  )
}

export default Page1Content