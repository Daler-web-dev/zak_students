import React from 'react';
import CrediteCard from '../components/CrediteCard';

const Profile = ({myCards}) => {
    return (
        <div className='container' >

            <div className="flex flex-col gap-5">
                {
                    myCards.map(card => (
                        <CrediteCard item={card} />
                    ))
                }
            </div>
        </div>
    );
};

export default Profile;