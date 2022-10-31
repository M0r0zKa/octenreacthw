import {useEffect, useState} from "react";
import {User} from "./User";
import {UserDetails} from "./UserDetails";

function Users(props) {
let [users,setUsers]=useState([])
    let [userInfo, setUserInfo] = useState()

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> { setUsers(users)
        })
},[])

    return (
        <div>

            {
users.map(user => <User key={user.id} user={user} />)
        }
        </div>
    );
}

export {Users};