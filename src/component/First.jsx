import React, { useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Add from './subcomponent/Add'
import Attachment from './subcomponent/Attachment'
import Documents from './subcomponent/Documents'

const First = () => {

    const navigate =useNavigate();

    const [name,setName]=useState('');
    const [fname,setFName]=useState('');
    const [error,setError]=useState({name:'',fname:''});

    const [email,setEmail]=useState('');
    const [number,setNumber]=useState('');
    const [adderror,setAddError]=useState({email:'',number:''});

    const [country,setCountry]=useState('');
    const [city, setCity]=useState('');
    const [attacherror,setAttacherror]=useState({country:'',city:''});


    const [identitychecked, setIdentitychecked]=useState(false);
    const [passportchecked, setPassportchecked]=useState(false);
    const [documentserror, setDocumentserror]=useState({identitynumber:'', passportnumber:''});


    

    const handleSave =()=>{
        
        const newError={name:'', fname:''};
        const newAdderror={email:'',number:''}
        const newAttacherror={country:'',city:''}
        const newDocumenterror={identitynumber:'', passportnumber:''}
        
        if(!name){
            newError.name='Name is required';
        }
        if(!fname){
            newError.fname="FName is required";
        }
        if(!email){
            newAdderror.email ='email is required';
        }
        if(!number){
            newAdderror.number ='number is required';
        }
        if(!country){
            newAttacherror.country ='country is required';
        }
        if(!city){
            newAttacherror.city ='city is required';
        }
        if(!identitychecked){
            newDocumenterror.identitynumber ='identity number is required';
        }
        if(!passportchecked){
            newDocumenterror.passportnumber ='passport number is required';
        }

        setError(newError);
        setAddError(newAdderror);
        setAttacherror(newAttacherror);
        setDocumentserror(newDocumenterror);

        

        if(!newError.name && ! newError.fname && !newAdderror.email && !newAdderror.number && !newAttacherror.country && !newAttacherror.city &&!newDocumenterror.identitynumber && !newDocumenterror.passportnumber){
            console.log('saved :',{name,fname,email,number,country,city});
            setName('');
            setFName('');
            setEmail('');
            setNumber('');
            setCountry('');
            setCity('');
            setDocumentserror({identitynumber:'', passportnumber:''});
        }

    }

    const handleExit =()=>{
        navigate('/');
    }


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex w-screen px-100 my-20'>
            <span>screen_2</span>

        </div>
        <div>
            <div className='flex flex-row gap-3 '>
                <div className='flex flex-col mb-10'>
                    <label>Name:</label>
                    <input className={`border rounded ${error.name ? 'border-red-500 border-3' : 'border-sky-500'} outline-none`} type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    {error.name && <span className='text-red-500'>{error.name}</span>}
                </div>
                <div className='flex flex-col'>
                    <label>F/Name:</label>
                    <input className={`border rounded ${error.fname ? 'border-red-500 border-3' : 'border-sky-500'} outline-none`} type="text" placeholder='F/Name' value={fname} onChange={(e)=>setFName(e.target.value)} />
                    {error.fname && <span className='text-red-500'>{error.fname}</span>}
                </div>
            </div>
            <hr />
            <div className='flex flex-row gap-3 justify-start my-9'>
                <NavLink to="/first" end className={({isActive})=>`bg-blue-500 p-2 rounded text-white ${isActive ? 'bg-green-700' :""}`}>add</NavLink>
                <NavLink to="/first/attachment" className={({isActive})=>`bg-blue-500 p-2 rounded text-white ${isActive ? 'bg-green-700' : ""}`}>attachmet</NavLink>
                <NavLink to="/first/documents" className={({isActive})=>`bg-blue-500 p-2 rounded text-white ${isActive ? 'bg-green-700' : ""}`}>documents</NavLink>
            </div>
            <hr />
            <div className='my-10'>
                <Routes>
                    <Route path='/' element={<Add  email={email} setEmail={setEmail} number={number} setNumber={setNumber} adderror={adderror} />  }/>
                    <Route path='attachment' element={<Attachment country={country} setCountry={setCountry} city={city} setCity={setCity} attacherror={attacherror}/>}/>
                    <Route path='documents' element={<Documents identitychecked={identitychecked} setIdentitychecked={setIdentitychecked} passportchecked={passportchecked} setPassportchecked={setPassportchecked} documentserror={documentserror}  />}/>
                </Routes>
            </div>
            <hr />
            <div className='mt-10'>
                <div className='flex flex-row gap-10 justify-center flex-wrap mx-10'>
                    <button className='bg-emerald-900 text-white p-3 rounded w-40 hover:bg-emerald-800' onClick={handleSave}>save</button>
                    <button className='bg-slate-900 text-white p-3 rounded w-40 hover:bg-slate-800'>edit</button>
                    <button className='bg-slate-900 text-white p-3 rounded w-40 hover:bg-slate-800' onClick={handleExit}>exit</button>
                </div>
            </div>

        </div>
      </div>
  )
}

export default First
