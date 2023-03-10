import React from "react";
import CrediteCard from "../components/CrediteCard";
import Accordion from "../components/Accordion";

const Profile = ({ myCards }) => {
  return (
    <div className="container pt-[20px]">
      <center>
        <p className="text-[#000000] font-[700] text-[32px]">Профиль</p>
      </center>

      <div className="flex items-center justify-center">
        <img src="/src/assets/chel.svg" alt="" />
      </div>

      <div className="w-100% pb-[10px]">
        <center>
          <p className="font-[500] text-[#000000] text-[24px]">
            Максим Максимов
          </p>
          <p className="font-[500] text-[#000000] text-[22px]">
            +998 90 900 90 90
          </p>
          <p className="font-[500] text-[#000000] text-[21px]">
            Ташкент, Проспект Халклар Дустлиги,1
          </p>
        </center>
      </div>

      <div className="flex flex-col gap-5">
        {myCards.map((card) => (
          <CrediteCard item={card} />
        ))}
      </div>

      <div className="w-100%">
        <center>
          <p className="font-[700] text-[#000000] text-[32px]">
            История заказов
          </p>
          <div className="w-[100%] rounded-[25px]  bg-[#FFFFFF] shadow-[0px 0px 20px rgba(0, 0, 0, 0.16)] ">
            <Accordion/>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Profile;
