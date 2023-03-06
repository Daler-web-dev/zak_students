import React from 'react';
import { Outlet } from 'react-router-dom';
import {AiOutlineSearch} from "react-icons/ai"

const Layout = () => {
    return (
        <>
            <header className="w-full px-3" >
                <img src="" alt="" />
                <form className="w-full flex justify-between items-center bg-green px-5  rounded-[15px]">
                    <input type="text" className='def-inp' placeholder="Search what you want" />
                    <button><AiOutlineSearch size="24" color="white" /></button>
                </form>
                <div className="">
                    
                </div>
            </header>
            <main className='px-3' >
                <Outlet/>
            </main>
            <footer className='px-3' >footer</footer>
        </>
    );
};

export default Layout;