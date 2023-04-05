import React from 'react'
import skillimg from '../asset/logo.svg'
import logojs from '../asset/js.png'
import '../App.css'
export default function skill() {
  return (
    <section className='h-max w-[100%] mb-[40px]'>
         <h1 className='text-2xl font-bold'>My SKill</h1>
           <div className='w-[300px] h-[400px] bg-[#F0DB4F] mx-auto mt-[20px] mr-[20px] rounded-[15px] inline-block shadow-2xl shadow-[#F0DB4F]'>
            <img src={logojs} alt="skill logo" className='w-[160px] mx-auto'/>
            <h3 className='text-white text-2x1 font-bold'>JavaScript</h3>
            <p className='w-[270px] mx-auto pt-[10px] font-sans text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium fuga aut consequatur reprehenderit odio! Numquam qui aperiam incidunt, perferendis quo rerum, voluptates pariatur sunt, iusto nam vero temporibus fuga?</p>
           </div>

           <div className='w-[300px] h-[400px] bg-[#FF5733] mx-auto mt-[20px] mr-[20px] rounded-[15px] inline-block shadow-2xl shadow-[#FF5733]'>
            <img src={skillimg} alt="skill logo" className='w-[230px] mx-auto'/>
            <h3 className='text-white text-2x1 font-bold'>HTML</h3>
            <p className='w-[270px] mx-auto pt-[10px] font-sans text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium fuga aut consequatur reprehenderit odio! Numquam qui aperiam incidunt, perferendis quo rerum, voluptates pariatur sunt, iusto nam vero temporibus fuga?</p>
            </div>

            <div className='w-[300px] h-[400px] bg-[#264de4] mx-auto mt-[20px] mr-[20px] rounded-[15px] inline-block shadow-2xl shadow-[#264de4]'>
            <img src={skillimg} alt="skill logo" className='w-[230px] mx-auto'/>
            <h3 className='text-white text-2x1 font-bold'>CSS</h3>
            <p className='w-[270px] mx-auto pt-[10px] font-sans text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium fuga aut consequatur reprehenderit odio! Numquam qui aperiam incidunt, perferendis quo rerum, voluptates pariatur sunt, iusto nam vero temporibus fuga?</p>
            </div>
    </section>
  )
}
