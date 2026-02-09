import React from 'react'
import { useState } from 'react';

const Seventh_btn = () => {

  const [form_1, setForm_1]=useState({
    name:'',
    fname:'',
    passport:false,
    tazkira:false
  });

  const handle_save=()=>{
    fetch('http://localhost:3001/aii/student',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(form_1)
    })
    .then(response => response.text())
    .then(data =>{
      alert(data);
    })
    .catch((error)=>{
      console.log('Error:',error);
      alert('Error saving data');
    })
  }

  return (
    <div className='flex flex-col justify-center items-center h-full text-2xl p-20 gap-10'>
      <div className='fixed top-0 left-0 p-10'>
        <h1>screen_7</h1>
      </div>
      <div className='flex flex-row flex-wrap gap-5'>
        <div className='flex flex-row gap-5'>
          <label>Name:</label>
          <input type="text" placeholder='Name' value={form_1.name} onChange={e=>setForm_1({...form_1,name:e.target.value})} className='border' />
        </div>
        <div className='flex flex-row gap-5'>
          <label>F/Name:</label>
          <input type="text" placeholder='F/Name' value={form_1.fname} onChange={e=>setForm_1({...form_1,fname:e.target.value})} className='border' />
          <p>{form_1.fname}</p>
        </div>
        <div className='flex flex-row gap-5'>
          <label>passport:</label>
          <input type="checkbox" checked={form_1.passport} onChange={e=> setForm_1({...form_1,passport:e.target.checked})} className='border' />
        </div>
        <div className='flex flex-row gap-5'>
          <label>Tazkira:</label>
          <input type="checkbox" checked={form_1.tazkira} onChange={e=> setForm_1({...form_1,tazkira:e.target.checked})} className='border' />
        </div>
      </div>

      <div className='flex flex-row gap-5'>
        <button className='bg-sky-500 p-2 rounded' onClick={handle_save}>save</button>
        <button className='bg-sky-500 p-2 rounded'>edit</button>
      </div>
      
    </div>
  )
}

export default Seventh_btn
