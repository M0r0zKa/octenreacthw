import React from 'react';

function UserDetails({userInfo}) {

    return (
        <div>
            {
                <p>{userInfo.id}</p>
            }

        </div>
    );
}

export {UserDetails};