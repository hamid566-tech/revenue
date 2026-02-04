import React from 'react'

const Add = ({email, setEmail, number, setNumber, adderror}) => {
  return (
    <div className='mt-10 '>
        <div className='flex justify-center'>
            <h1 className='text-green-700 font-bold text-2xl'>Add page</h1>
        </div>
        <div className='flex flex-row gap-3 mt-10'>
            
                    <div className='flex flex-col '>
                        <label>Email:</label>
                        <input className={`border rounded ${adderror.email ? 'border-red-500 border-3' : 'border-sky-500'} outline-none`} type="email" placeholder='Email'
                         value={email} onChange={(e)=> setEmail(e.target.value)}
                          />
                        {adderror.email && <span className='text-red-500'>{adderror.email}</span>}
                    </div>
                    <div className='flex flex-col '>
                        <label>Number:</label>
                        <input className={`border rounded ${adderror.number ? 'border-red-500 border-3' : 'border-sky-500'} outline-none`} type="phone" placeholder='Number' value={number} onChange={(e)=> setNumber(e.target.value)}/>
                        {adderror.number && <span className='text-red-500'>{adderror.number}</span>}
                    </div>
        </div>
    </div>
  )
}

export default Add
