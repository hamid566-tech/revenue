import React from 'react'

const Add_Second = () => {
  return (
    <div className='flex flex-col gap-10 flex-wrap mx-20 items-center text-2xl'>
        <h1>h1</h1>
        <div className='flex flex-row gap-10 flex-wrap'>
            <div className='flex flex-row gap-10'>
                <label htmlFor="">quantity:</label>
                <input type="text" className='bg-white outline-none text-black'/>
            </div>
            <div className='flex flex-row gap-10'>
                <label htmlFor="">total:</label>
                <input type="text" className='bg-white outline-none text-black'/>
            </div>
        </div>
      </div>
  )
}

export default Add_Second
