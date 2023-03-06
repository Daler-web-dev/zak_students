import React from "react";

const CrediteCard = ({item}) => {
	return <div className="w-full bg-green p-6 rounded-3xl" >
        <h3 className="text-2xl text-white mb-4" >
            Maksim Maksimov
        </h3>
        <span className="text-lg text-white" >Основная карта</span>
        <div className="w-full flex justify-between items-center mt-6">
            <span>8600 55** **** 6600</span>
            <h3>{item}</h3>
        </div>
    </div>;
};


export default CrediteCard