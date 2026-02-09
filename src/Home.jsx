import React, { useState } from 'react'
import { useNavigation } from './useNavigation';

const Home = () => {

    const [inputvalue, setInputvalue]=useState('');
    const {searchHandle,navigateto} =useNavigation();

    const search_handle=()=>{
        searchHandle(inputvalue);
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
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={()=>navigateto('/first')}>First Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={()=>navigateto('/second')}>Secnnd Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={()=>navigateto('/third')}>Third Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={()=>navigateto('/fourth')}>Fourth Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={()=>navigateto('/fifth')}>Fifth Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={()=>navigateto('/sixth')}>sixth Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={()=>navigateto('/seventh')}>seveth Button</button>
                <button className='bg-green-500 text-white p-3 rounded-md ' onClick={()=>navigateto('/eight')}>eight Button</button>
            </div>
        </div>
  )
}

export default Home
