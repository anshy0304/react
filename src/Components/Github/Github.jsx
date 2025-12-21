import React, { useState } from "react"
import { useEffect } from "react"
function GitHub() {
    const [data,setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/anshy0304')
        .then(response => response.json())
        .then(data => setdata(data))
    },[])
    return(

        <>
        <div className="flex-col m-4 bg-blue-500 p-5">
            <div className="text-white mb-5">Github Followers : {data.followers}</div>
            <div><img src={data.avatar_url} alt="" /></div>
            </div>
        </>
    )
}
export default GitHub