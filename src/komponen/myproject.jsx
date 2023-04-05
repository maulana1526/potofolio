import React from 'react'
import img from '../asset/logo.svg'
import '../App.css'
export default function myproject() {
  return (
   <section className='h-max w-[100%] mb-[40px]'>
    <div>
        <h1 className='font-bold text-2xl'>My Project</h1>
        {/* repo bot discord */}
        <a href="https://github.com/maulana1526">
        <div id='projecthover2' className='w-[600px] h-[230px] mx-auto mt-[20px] mr-[20px] rounded-[15px] inline-block shadow-2xl shadow-[#383838]'>
            <img src={img} alt="img" className='w-[200px] float-left mt-[10px]'/>
            <h1 className='font-bold float-left p-[5px] mt-[10px]'>Bot Discord</h1>
            
            <p className='w-[395px] float-right p-[10px] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim atque tempora sint dolore ipsam aut, facere fugiat eos quod maxime nihil quibusdam, nemo deleniti dignissimos ipsa ratione. Necessitatibus, eligendi.</p>
            
           </div>
        </a>

        {/* other repo */}
        <a href="https://github.com/maulana1526">
        <div id='projecthover2' className='w-[600px] h-[230px] mx-auto mt-[20px] mr-[20px] rounded-[15px] inline-block shadow-2xl shadow-[#383838]'>
            <img src={img} alt="img" className='w-[200px] float-left mt-[10px]'/>
            <h1 className='font-bold float-left p-[5px] mt-[10px]'>Bot Discord</h1>
            
            <p className='w-[395px] float-right p-[10px] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim atque tempora sint dolore ipsam aut, facere fugiat eos quod maxime nihil quibusdam, nemo deleniti dignissimos ipsa ratione. Necessitatibus, eligendi.</p>
            
           </div>
        </a>
        <br/><br/>
        <p>Join <span className='text-[#7289d9]'><a href="http://iktindonesia.ml/discord">Discord</a></span> gweh</p>
    </div>
   </section>
  )
}
