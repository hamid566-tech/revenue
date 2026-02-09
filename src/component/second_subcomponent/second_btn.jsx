import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Add_Second from './Add_Second';
import Attach_second from './Attach_second';
import Refresh_browser from '../models/Refresh_browser';

export default function Second_btn() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const [showRefreshBrowser, setShowRefreshBrowser] = useState(false);

    // Check local storage on component mount
    useEffect(() => {
        const storedName = localStorage.getItem('name');
        const storedFname = localStorage.getItem('fname');

        // Only show Refresh_browser if stored values are not empty
        if (storedName !== null && storedName !== '' || storedFname !== null && storedFname !== '') {
            setName(storedName || '');
            setFname(storedFname || '');
            setShowRefreshBrowser(true); // Show only if inputs exist in localStorage
        }
    }, []);

    // Save inputs to local storage
    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('fname', fname);
    }, [name, fname]);

    const handle_Exit = () => {
        navigate('/');
    };

    const handleSave = () => {
        console.log('Saved:', { name, fname });
        // Clear input fields and local storage
        setName('');
        setFname('');
        setShowRefreshBrowser(false);
        localStorage.removeItem('name');
        localStorage.removeItem('fname');
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-black gap-10 text-white'>
            <div className='flex w-screen px-100 my-20'>
                <span>screen_3</span>
            </div>
            <div className='flex flex-row gap-10 flex-wrap mx-20 text-2xl'>
                <div className='flex flex-row gap-10'>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        className='bg-white outline-none text-black' 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    />
                </div>
                <div className='flex flex-row gap-10'>
                    <label>F/Name:</label>
                    <input 
                        type="text" 
                        className='bg-white outline-none text-black' 
                        value={fname} 
                        onChange={e => setFname(e.target.value)} 
                    />
                </div>
            </div>
            <hr className='h-1 w-full bg-sky-500 rounded'/>
            <div className='flex flex-row gap-5'>
                <NavLink to='/second' end className={({ isActive }) => `bg-gray-500 p-3 rounded ${isActive ? 'bg-red-500' : ''}`}>add</NavLink>
                <NavLink to='/second/attach' className={({ isActive }) => `bg-gray-500 p-3 rounded ${isActive ? 'bg-red-500' : ''}`}>attach</NavLink>
            </div>
            <hr className='h-1 w-full bg-sky-500 rounded'/>
            
            <div>
                <Routes>
                    <Route path='/' element={<Add_Second />} />
                    <Route path='attach' element={<Attach_second />} />
                </Routes>
            </div>
            
            <hr className='h-1 w-full bg-sky-500 rounded'/>
            <div className='flex flex-row gap-10 flex-wrap mx-20 text-2xl'>
                <button className='bg-green-500 p-3 rounded w-50' onClick={handleSave}>Save</button>
                <button className='bg-blue-500 p-3 rounded w-50'>Edit</button>
                <button className='bg-red-500 p-3 rounded w-50' onClick={handle_Exit}>Exit</button>
            </div>
            {showRefreshBrowser && <Refresh_browser />} {/* Show based on localStorage check */}
        </div>
    );
}