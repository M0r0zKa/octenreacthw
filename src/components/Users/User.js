import React, {useEffect, useState} from 'react';
import {UserDetails} from "./UserDetails";

function User({user}) {
    let [userInfo, setUserInfo] = useState()

function userFX(user){
    setUserInfo(user)
}
return (
        <div>
            {
                userInfo && <UserDetails userInfo={userInfo}/>
            }
            {
                <p><b>ID:</b>{user.id}<p><b>Name:</b>{user.name}</p></p>
            }
            <button onClick={()=>{
                userFX(user)
            }}>Info User</button>
        </div>
    );
}

export {User};