import React, { useEffect, useState } from 'react'

const Fourth_btn = () => {
    const [form_1,setForm_1]=useState({});
    const [form_2,setForm_2]=useState({});

    const handleChange_1 =(e,i)=>{
        setForm_1(prev => ({ ...prev,[`Field_${i+1}`]:e.target.value}));
    }

    const handleChange_2=(e,keyfield)=>{
        setForm_2(prev =>({...prev,[keyfield]:e.target.value}));
    }

    const hasData_1=Object.values(form_1).some(val => val && val.length>0);
    const hasData_2=Object.values(form_2).some(vals => vals && vals.length>0);

    const hasData = hasData_1 || hasData_2;


    const secondfiled=[
        {label:'A_1',placeholder:'A_11',type:'text'},
        {label:'B_1',placeholder:'B_1',type:'combo'}
    ];

    useEffect(()=>{
        const handlebeforeload =(e)=>{   
            if(hasData){
                e.preventDefault();

            }
        }

        window.addEventListener('beforeunload',handlebeforeload);

        return()=>{
            window.removeEventListener('beforeunload',handlebeforeload);
        }

    },[hasData]);

    
  return (
    <div className='flex flex-col'>
        <div className='pt-2 pl-5 bg-red-200 text-2xl text-sky-600'>
            <h1 className=' pt-2 pb-4a'>screen_4</h1>
        </div>
        <div className='flex flex-row flex-wrap px-20 py-10 m-10 gap-10 justify-center items-center h-full text-3xl'>
            
            
            {Array.from({length: 20}, (_,i) =>(
                <div key={i} className='flex flex-col gap-5'>
                    <label className='pl-2'>Field_{i+1}:</label>
                    <input type="text" className='border p-2 border-yellow-500 outline-none' value={form_1[`Field_${i+1}`] || ''} onChange={(e) => handleChange_1(e,i)}/>
                </div>
                
            ))}
        </div>
        
        <div className='flex flex-row flex-wrap px-20 py-10 m-10 gap-10 justify-center items-center h-full text-3xl bg-black text-white '>
            {Array.from({length:23},(_,i)=>(
                <div key={i} className='flex flex-col gap-5'>
                    <label className='pl-2'>Field_{i+21}:</label>
                    <input type="text" className='border p-2 border-yellow-500 outline-none' value={form_1[`Field_${i+21}`] || ''} onChange={(e) => handleChange_1(e,i)}/>
                </div>
            ))}
        </div>
        <div className='flex flex-row flex-wrap px-20 py-10 m-10 gap-10 justify-center items-center h-full text-3xl bg-white text-black '>
            {secondfiled.map((fieldName,index)=>(
                <div key={index} className='flex flex-col gap-5'>
                <label>{fieldName.label}</label>
                <input type={fieldName.type} placeholder={fieldName.placeholder} className='border p-2 border-yellow-500 outline-none' onChange={(e)=>{handleChange_2(e,fieldName)}} />
            </div>
  ))}
            
            
        </div>

    </div>
  )
}

export default Fourth_btn
