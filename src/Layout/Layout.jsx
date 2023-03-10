import React from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <center className="pt-[10px]">
        <img src="/src/assets/zak-pharmacy.svg" alt="" />
      </center>
      <header className="w-full px-3 pt-[20px]">
        <img src="" alt="" />
        <form className="w-full flex justify-between items-center bg-green px-5  rounded-[15px]">
          <input
            type="text"
            className="def-inp"
            placeholder="Search what you want"
          />
          <button>
            <AiOutlineSearch size="24" color="white" />
          </button>
        </form>
        <div className="pt-[10px]">
          <div className="w-[100%] flex justify-between items-center ">
              <center>
                <input className="border-none w-[86px] bg-[#00AC73] h-[50px] rounded-[15px] placeholder:text-[black] " list="languages" id="myLanguage" name="myLanguage" placeholder="tap this" />
                <datalist id="languages">
                  <option value="Russian"></option>
                  <option value="Chinese"></option>
                  <option value="French"></option>
                  <option value="English"></option>
                  <option value="Korean"></option>
                </datalist>
              </center>
            <div className="w-[196px] flex items-center justify-center h-[50px] bg-[#00AC73] rounded-[15px]">
              <center>
                <p className="text-[#FFFFFF] font-[400]">Войти/Регистрация</p>
              </center>
            </div>
          </div>
        </div>
      </header>
      <main className="px-3">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
