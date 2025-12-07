import React from 'react'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'

const App = () => {

  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1664034645134-a2ec6a1a35d0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664464229519-f75cfe27375a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "",
      color: "crimson",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "",
      color: "green",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "",
      color: "magenta",
      tag: "Trustie",
    }
  ]

  return (
    <div>
      <Page1 users = {users} />
      <Page2 />
    </div>
  )
}

export default App