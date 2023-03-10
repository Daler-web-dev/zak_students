import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-3 w-[100%] bg-[#00AC73] pt-[10px] ">
      <div className="flex justify-center">
        <img src="/src/assets/zak-pharmacy.png" alt="" />
      </div>
      <div className="pt-[15px]">
      <p className="text-[#FFFFFF] text-[20px]">
        Серви поддерживает вас и помогает найти лекарства по выгодным ценам и с
        удобной круглосуточной доставкой почти в любую точку страны. Будьте
        здоровы с нами!
      </p>
      </div>

      <div className="w-[100%] gap-[10px] flex pt-[30px]">
        <div className="w-[48%]  ">
          <p className="font-[700] text-[24px] text-[#FFFFFF]">О компании</p>
          <div className="pt-[20px]"></div>
          <div className="w-[100%]  flex items-start justify-start">
            <div className="gap-[10px]  ">
              <p className="text-[#FFFFFF] font-[500] text-[16px] ">Контакты</p>
              <br></br>
              <p className="text-[#FFFFFF] font-[500] text-[16px]">Доставка</p>
              <br></br>
              <p className="text-[#FFFFFF] font-[500] text-[16px]">
                Пользовательское соглашение
              </p>
              <br></br>
              <p className="text-[#FFFFFF] font-[500] text-[16px]">
                Стать партнером
              </p>
              <br></br>
              <p className="text-[#FFFFFF] font-[500] text-[16px]">
                Стать курьером
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="w-[48%]">
          <p className="font-[700] text-[24px] text-[#FFFFFF]">Помощь</p>
          <div className="pt-[20px]"></div>
          <div className=" w-[100%]  flex items-start justify-start">
            <div className="gap-[10px]  ">
              <p className="text-[#FFFFFF] font-[500] text-[16px] ">
                Часто задаваемые вопросы
              </p>
              <br></br>
              <p className="text-[#FFFFFF] font-[500] text-[16px]">
                Как заказать
              </p>
              <br></br>
              <p className="text-[#FFFFFF] font-[500] text-[16px]">
                Обратная связь
              </p>
              <br></br>
              <p className="text-[#FFFFFF] font-[500] text-[16px]">
                Правила для оформления отзывов и комментариев
              </p>
              <br></br>
              <p className="text-[#FFFFFF] font-[500] text-[16px]">
                Стать курьером
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="flex items-center justify-center pt-[10px]">
          <p className="font-[500] text-[16px] text-[#FFFFFF] ">
            Мы в социальных сетях
          </p>
        </div>
        <div className="pt-[20px] flex items-center justify-center">
          <div className="w-[55%] flex items-center justify-between">
            <ImFacebook2 size={32} color="blue" />
            <SiInstagram size={32}></SiInstagram>
            <FaTelegram size={32} color="blue"></FaTelegram>
          </div>
        </div>
        <center className="pt-[20px]">
          <p className="font-[600] text-[18px] text-[#FFFFFF] pb-[15px]">
            +998 71 200-00-00
          </p>
        </center>
      </div>
    </div>
  );
};

export default Footer;
