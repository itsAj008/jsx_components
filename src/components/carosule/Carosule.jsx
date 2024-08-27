import React from 'react'
import Imageslider from './Imageslider'
import naruto from '../../Images/naruto.jpg'
import itachi from '../../Images/itachi.jpg'
import sasuke from '../../Images/sasuke.jpg'
import kakshi from '../../Images/kakashi.jpg'
import solo from '../../Images/solo.jpg'
import jin from '../../Images/jin.jpg'

const urls = [naruto,sasuke,itachi,kakshi,solo,jin]

function Carosule() {
  return (
    <div className=' w-full h-screen'> 
      <Imageslider  urls={urls}/>
    </div>
  )
}

export default Carosule
