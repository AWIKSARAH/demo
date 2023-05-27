import React from 'react';

const LoadingCard = {
    width: '18 rem',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '.8rem',
    backgroundColor: 'white'
}

const CardTitle = {
    height: '15px',
    marginBottom: '15px',
    backgroundImage: 'linear-gradient(90deg,#ccc 0px , rgb(229 229 229 / 90%) 40px , #ccc 80px)',
    backgroundSize: '300%',
    backgroundPosition: '100% 0',
    borderRadius: 'inherit',
    animation: 'shimmer 1.5s infinite'
}
const CardDescription = {
    height: '100px',
    backgroundImage: 'linear-gradient(90deg,#ccc 0px , rgb(229 229 229 / 90%) 40px , #ccc 80px)',
    backgroundSize: '300%',
    backgroundPosition: '100% 0',
    borderRadius: 'inherit',
    animation: 'shimmer 1.5s infinite'
}

function AnnounceentLoading() {
    return (

        <div style={LoadingCard}>
            <div class="card__skeleton card__title" style={CardTitle}></div>
            <div class="card__skeleton card__description" style={CardDescription}>         </div>
        </div>
    );
}

export default AnnounceentLoading;


