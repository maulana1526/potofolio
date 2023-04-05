import React from 'react'
import Header from '../komponen/header'
import '../App.css'
import Foto from '../asset/nakano miku.jpg'
import Skill from '../komponen/skill'
import Github from '../komponen/github'
import Myproject from '../komponen/myproject'
import Banner from '../komponen/banner'
import Footer from '../komponen/footer'
export default function main() {
  return (
    <>
        <Header/>
<Github/>
        <div className="h-[100vh]">
          <img src={Foto} alt="foto gwe" className='w-[300px] mx-auto p-[20px] rounded-[100%]'/>
          <h1 className="text-2xl font-bold">Rizqi Maulana</h1>
          <div id="comment" className='border-solid border-2 border-[#000000] rounded-[15px] shadow-lg shadow-[#429ef5] w-[800px] mt-[20px] mx-auto p-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque assumenda esse iste similique saepe, iusto expedita commodi tempore excepturi vero sapiente eos id repellat nemo, voluptate ad! Dolorum, nesciunt quam.</div>
        </div>
        <Skill/>
        <Myproject/>
        <Banner/>
        <Footer/>

    </>
   
  )
}
