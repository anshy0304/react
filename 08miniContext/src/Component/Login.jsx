import React from "react";
import UserContext from "../Context/Usercontext";
import { useContext } from "react";
import { useState } from "react";

function Login() {
    const [username,setUsername] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubit = (e) =>{
        e.preventDefault();
        setUser({username})
    }
    return(
        <>
        <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text" placeholder="username"/>
        <button onClick={handleSubit}>Submit</button>

        </>
    )
}
export default Login