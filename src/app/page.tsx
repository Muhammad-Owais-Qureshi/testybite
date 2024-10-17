import React from 'react'
import Hero from './component/hero'
import Card from './component/card'
import Smothcard from './component/smothcard'
import Popular from './component/popular'
import Mailbox from './component/mailbox'
import Handpick from './component/handpick'
import Latest from './component/latest'

const Home = () => {
  return (
    <div className="my-5 mx-3">
      <Hero/>
      <Card/>
      <Smothcard/>
      <Popular head = "Popular Categories"/>
      <Mailbox text="Delicousness to your Inbox" text2=" Enjoy weekly hand picked reciepe and recommendation" text3="Join"/>
      <Handpick/>
      <Latest/>

    </div>
  )
}

export default Home
