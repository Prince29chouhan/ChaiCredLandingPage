import React from 'react'
import Hero from '../hero'
import About from '../about'
import TeamComponent from '../team'
import Join from '../join'

function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <TeamComponent />
      <Join/>
    </div>
  )
}

export default Home
