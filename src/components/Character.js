import React from 'react';

function Character({name,description,picture}) {
    return (
        <div>
            <b>{name}</b>
            <p>{description}</p>
            <img src={picture}/>
        </div>

    );
}

export {Character};