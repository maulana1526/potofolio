import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function header() {
  return (
      <header className='bg-[#5050505e] h-[40px] w-[100%] fixed drop-shadow-xl shadow-[#404040]'>
        <nav>
           <h1 className='font-bold text-2xl text-white ml-[20px] float-left'>My Portofolio</h1>
          <ul>
            <li><a href="https://github.com/maulana1526" className='text-white'>Github</a></li>
            <li><a href="https://tiktok.com" className='text-white'>tiktok</a></li>
            <li><Link to={'/'} className='text-white'>Home</Link></li>
            <li><Link to={'/Sekolah'} className='text-white'>Sekolah</Link></li>
          </ul>
        </nav>
      </header>
  )
}
