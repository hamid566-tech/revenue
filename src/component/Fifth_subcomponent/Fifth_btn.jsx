import React, { useState } from 'react'

const Fifth_btn = () => {
    const [input,setInput]=useState({});
    const [check,setCheck]= useState({});
    const field_1=[
        {label:'Name', placeholder:'Name',type:'text'},
        {label:'f/Name', placeholder:'f/Name',type:'text'},
        {label:'Identity',type:'checkbox'},
        {label:'Identity',type:'checkbox'},
        {label:'Identity',type:'checkbox'},
        {label:'Identity',type:'checkbox'},
        {label:'Identity',type:'checkbox'},
    ]

    const handle_input=(e,index)=>{
        setInput(prev => ({...prev, [index]:e.target.value}));
    }
    const handle_check =(index,checked)=>{
        setCheck(prev =>({...prev,[index]:checked}))
    }

    console.log(check);
  return (
    <div className='flex flex-col justify-center items-center h-full px-30 py-20 bg-gray-500'>
      <div className='fixed top-0 left-0  p-10 text-white text-2xl'>
        <h1>screen_5</h1>
      </div>
      <div className='flex flex-row flex-wrap gap-20'>
        {field_1.map((eachField,index)=>(
            
        <div key={index} className='flex flex-row gap-5 '>
            <label className='min-w-50 text-right'>{eachField.label}:</label>
            {
            eachField.type ==='text' ? (
                <input type={eachField.type} onChange={e => handle_input(e,index)} placeholder={eachField.placeholder} className='bg-white outline-none min-w-50' value={input[index] || ''} />
            )
            : eachField.type === 'checkbox' ? (
                <input type={eachField.type} checked={check[index] ||false} onChange={e=>handle_check(index,e.target.checked)} className='appearance-none accent-blue-500 bg-white outline-none w-5 h-5 border-4 border-green-700 rounded-sm checked:border-transparent focus:outline-none checked:bg-blue-700' />
            ) : null
            
            }
            
        </div>
        
        ))}
      </div>
    </div>
  )
}

export default Fifth_btn
