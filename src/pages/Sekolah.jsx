import React from 'react'
import Header from '../komponen/header'
import LSekolah from '../asset/sekolah.jpg'
import '../App.css'
import audio from '../asset/Dj El Perdon X Mashup Viral Tiktok ( Slow & Reverb ) Mengkane Full Bass🎧.mp3'
export default function Sekolah() {
  return (
    <div>
      <Header/>
      <div className=" p-4">
        <img id='logosekolah' src={LSekolah} alt="fotosekolah" className='w-[500px] mx-auto p-[20px] rounded-[10%]'/>
      </div>
      <h1 className='font-bold text-2xl'>SMKN 2 MATARAM</h1>
      <div className='border-solid border-2 border-[#000000] rounded-[15px] w-[800px] mt-1 mx-auto'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et quibusdam atque, architecto enim temporibus necessitatibus possimus odio at optio nulla dolore rerum velit quos laudantium totam eum quasi vitae?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum excepturi culpa asperiores unde praesentium doloribus nemo nobis aperiam impedit deleniti, nulla voluptate neque velit ab eaque est. Dolor, optio harum.</p>
      </div>
      <audio src={audio} autoPlay></audio>
      </div>
    
  )
}
