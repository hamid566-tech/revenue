import React, { useState } from 'react'

function Sixth_btn() {
    const [check,setCheck]=useState({});
    const [input,setInput]=useState({});
    const form_1 =[
        {label:'Name',placeholder:'Name',type:'text'},
        {label:'F/Name',placeholder:'F/Name',type:'text'},
        {label:'Passport',type:'checkbox'},
        {label:'Tin',type:'checkbox'},
    ]
    const input_handle =(e,label)=>{
        setInput(prev => ({...prev,[label]:e.target.value}))
    }
    const check_handle =(e,label)=>{
        setCheck(prev =>({...prev, [label]:e.target.checked}))
    }
  return (
    <div className='flex flex-col gap-20 justify-center items-center h-full px-30 py-10 bg-gray-300 '>
      <div className='fixed top-0 left-0 p-3 text-2xl'>
            <h1>screen_6</h1>
      </div>
      <div className='flex flex-row flex-wrap gap-5 '>
        {form_1.map((field,index)=>(
            <div key={index} className='flex flex-row max-w-100 gap-5'>
                <label>{field.label}:</label>
                {
                    field.type === 'text' ?
                        <input type={field.type} value={input[field.label] || ''} onChange={e => input_handle(e,field.label)} placeholder={field.placeholder} className='bg-white ' />
                    :field.type === 'checkbox' ?
                        <input type={field.type} checked={check[field.label] || false} onChange={e=>check_handle(e,field.label)} className='bg-white h-5 w-5' />
                    :null
                }
            </div>
            ))}
      </div>

      <div className='flex flex-row justify-center gap-10 bg-red-300 w-full p-5 '>
        <button className='bg-sky-600 p-2 rounded'>Save</button>
        <button className='bg-yellow-600 p-2 rounded'>edit</button>
        <button className='bg-blue-600 p-2 rounded'>delete</button>
      </div>
      <div className='flex flex-col justify-center items-center  gap-10 bg-red-300 w-full p-5 '>
        <input type="text" placeholder='search' className='bg-white text-center'/>
        <button className='bg-red-600 p-2 rounded min-w-50'>search</button>
      </div>

    </div>
  )
}

export default Sixth_btn
