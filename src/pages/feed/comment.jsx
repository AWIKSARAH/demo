import React from 'react';

const InformationCard = ({ name, description, timestamp }) => {
    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-lg">
            <img className="rounded-full h-8 w-8 mr-2 mt-1" src="../../../public/img/logo.png" alt="Profile" />
            <div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                    <div className="font-semibold text-sm leading-relaxed">{name}</div>
                    <div className="text-normal leading-snug md:leading-normal">{description}</div>
                </div>
                <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">{timestamp}</div>

            </div>
        </div>
    );
};

export default InformationCard;
