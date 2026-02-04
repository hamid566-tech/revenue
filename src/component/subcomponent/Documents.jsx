import React from 'react'

const Documents = ({ identitychecked, setIdentitychecked, passportchecked, setPassportchecked, documentserror }) => {

    const checkboxes = [
        {
            label:"Identity Number",
            type:"checkbox",
            chekced:identitychecked,
            onchange:(e)=>setIdentitychecked(e.target.checked),
            error:documentserror.identitynumber,
        },
        {
            label:"Passport Number",
            type:"checkbox",
            chekced:passportchecked,
            onchange:(e)=>setPassportchecked(e.target.checked),
            error:documentserror.passportnumber,
        },
    ]

  return (
    <div className='mt-10'>
      <div className='flex justify-center'>
            <h1 className='text-green-700 font-bold text-2xl'>Document page</h1>
        </div>
        <div className='flex flex-col gap-3 mt-10'>
            
            {checkboxes.map(({label,type,checked,onchange,error}, index) =>(
                <div className='flex flex-row gap-3' key={index}>
                        <label>{label}:</label>
                            <input className="appearance-none h-5 w-5 border border-4 border-green-900 rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none" type={type} checked={checked} onChange={onchange}  />
                            {error && <span className='text-red-500'>{error}</span>}
                    </div>
            ))}
                    
        </div>
    </div>
  )
}

export default Documents
