import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Eight_btn = () => {
    const [form_1, setForm_1]=useState({
        tname:'',
        tfname:'',
        tlname:'',
        card_1:false,
        card_2:false
      });

      const [teacher,setTeacher]=useState([]);

      const fetchTeacher=()=>{
        fetch('http://localhost:3001/apii/teacher',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(response => response.json())
        .then(data =>{
            setTeacher(data);
        })
        .catch((error)=>{
            console.log('Error fetching data:',error);
        })
      }

useEffect(()=>{
    fetchTeacher();
},[]);

const handle_save=()=>{
    fetch('http://localhost:3001/apii/teacher',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(form_1)
    })
    .then(response => response.text())
    .then(data =>{
      alert(data);
      fetchTeacher();
    })
    .catch((error)=>{
      console.log('Error:',error);
      alert('Error saving data');
    })
  }


  return (
    <div className='flex flex-col justify-center items-center h-full text-2xl p-20 gap-10'>
      <div className='fixed top-0 left-0 p-10'>
        <h1>screen_8</h1>
      </div>
      <div className='flex flex-row flex-wrap gap-5'>
        <div className='flex flex-row gap-5'>
          <label>teacher Name:</label>
          <input type="text" placeholder='Name' value={form_1.tname} onChange={e=>setForm_1({...form_1,tname:e.target.value})} className='border' />
        </div>
        <div className='flex flex-row gap-5'>
          <label>teacher F/Name:</label>
          <input type="text" placeholder='F/Name' value={form_1.tfname} onChange={e=>setForm_1({...form_1,tfname:e.target.value})} className='border' />
          <p>{form_1.tfname}</p>
        </div>
        <div className='flex flex-row gap-5'>
          <label>teacher L/Name:</label>
          <input type="text" placeholder='last/Name' value={form_1.tlname} onChange={e=>setForm_1({...form_1,tlname:e.target.value})} className='border' />
          <p>{form_1.tlname}</p>
        </div>
        <div className='flex flex-row gap-5'>
          <label>card1:</label>
          <input type="checkbox" checked={form_1.card_1} onChange={e=> setForm_1({...form_1,card_1:e.target.checked})} className='border' />
        </div>
        <div className='flex flex-row gap-5'>
          <label>card2:</label>
          <input type="checkbox" checked={form_1.card_2} onChange={e=> setForm_1({...form_1,card_2:e.target.checked})} className='border' />
        </div>
      </div>

      <div className='flex flex-row gap-5'>
        <button className='bg-sky-500 p-2 rounded' onClick={handle_save}>save</button>
        <button className='bg-sky-500 p-2 rounded'>edit</button>
      </div>

      <div className='flex justify-center items-center bg-red-200 w-full p-10'>
        <table className='w-full border border-gray-500 bg-yellow-200 shadow-lg rounded'>
            <thead className='bg-sky-500 text-white '>
                <tr>
                    <th className='p-5 border border-white border-2'>ID</th>
                    <th className='p-5 border border-white border-2'>TName</th>
                    <th className='p-5 border border-white border-2'>TFName</th>
                    <th className='p-5 border border-white border-2'>TLastname</th>
                    <th className='p-5 border border-white border-2'>Card_1</th>
                    <th className='p-5 border border-white border-2'>Card_2</th>
                </tr>
            </thead>
            <tbody>
                {teacher.map((teach,index)=>(
                    
                <tr key={index} className='text-center'>
                    <td className='p-5 border border-black border-2'>{teach.id_t}</td>
                    <td className='p-5 border border-black border-2'>{teach.tname}</td>
                    <td className='p-5 border border-black border-2'>{teach.tfname}</td>
                    <td className='p-5 border border-black border-2'>{teach.tlname}</td>
                    <td className='p-5 border border-black border-2'>{teach.card_1 ? 'Yes' : 'No'}</td>
                    <td className='p-5 border border-black border-2'>{teach.card_2 ? 'Yes' : 'No'}</td>
                </tr>

                ))}
                {teacher.length ===0 && 
                    <tr>
                        <td colSpan='6' className='text-center p-5'>No data found</td>
                    </tr>
                }

            </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Eight_btn
