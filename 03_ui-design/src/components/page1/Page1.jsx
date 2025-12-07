import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
import Page2 from '../page2/Page2'

const Page1 = (props) => {
  return (
    <div className='w-full h-screen'>
        <Navbar />
        <Page1Content users={props.users} />
    </div>
  )
}

export default Page1