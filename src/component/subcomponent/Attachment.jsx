import React from 'react'

const Attachment = ({country, setCountry, city, setCity, attacherror}) => {
  return (
    <div className='mt-10'>
        <div className='flex justify-center'>
            <h1 className='text-green-700 font-bold text-2xl'>attachment page</h1>
         </div>
        <div className='flex flex-row gap-3 mt-10'>
            <div className='flex flex-col '>
                <label>country:</label>
                <input className={`border rounded ${attacherror.country ? 'border-red-500 border-3' : 'border-sky-500'} outline-none`} type="text" placeholder='Country' value={country} onChange={(e)=>setCountry(e.target.value)} />
                {attacherror.country && <span className='text-red-500'>{attacherror.country}</span>}
        </div>
            <div className='flex flex-col '>
                <label>city:</label>
                <input className={`border rounded ${attacherror.city ? 'border-red-500 border-3' : 'border-sky-500'} outline-none`} type="text" placeholder='City' value={city} onChange={(e)=> setCity(e.target.value)}/>
                {attacherror.city && <span className='text-red-500'>{attacherror.city}</span>}
        </div>
    </div>
    </div>
  )
}

export default Attachment
