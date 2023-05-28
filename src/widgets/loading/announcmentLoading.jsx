import React from 'react';
import './style.css'

function AnnouncementLoading() {
    return (
        <div className="main__card">
            <div className="card__skeleton card__title"></div>
            <div className="card__skeleton card__description">         </div>
        </div>
    );
}

export default AnnouncementLoading;
