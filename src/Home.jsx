import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();

    const [inputvalue, setInputvalue]=useState('');

    const search_handle=()=>{
        if(inputvalue==='screen_2'){
            navigate('/first');
        }
    }

    const first_handle =() =>{
        navigate('/first');
    }

  return (
    
        
        <div className='flex justify-center items-center h-screen bg-black flex-col gap-20'>
            <div className='flex text-white justify-start my-20 w-screen px-100'>
                <span>screen_1</span>
            </div>
            <div className='flex flex-col gap-5'>
                <input type="text" className='bg-white outline-none h-10' value={inputvalue} onChange={e => setInputvalue(e.target.value)}/>
                <button className='bg-sky-500 p-3 rounded text-white' onClick={search_handle}>Search Button</button>
            </div>
            <div className='flex flex-row gap-10 flex-wrap mx-100'>
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={first_handle}>First Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md '>Secnnd Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md '>Third Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md '>Fourth Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md '>Fifth Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md '>Five Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md '>Sixth Button</button>
            </div>
        </div>
  )
}

export default Home
