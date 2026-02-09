import React, { useEffect, useState } from 'react';

const Third_btn = () => {
    
    const [name, setName]=useState('');

     useEffect(()=>{
        const handlebeforeload =(e)=>{
            if(name){
                e.preventDefault();
                e.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handlebeforeload);

        return()=>{
            window.removeEventListener('beforeunload', handlebeforeload);
        }

    },[name]);
  
  return (
    <div className='flex justify-center items-center h-screen text-4xl'>
      <div className='flex gap-5'>
        <label className='p-2'>name:</label>
        <input
          type="text"
          className='border p-2'
          value={name}
          onChange={e => setName(e.target.value)}
       />
      </div>
    </div>
  );
}

export default Third_btn;