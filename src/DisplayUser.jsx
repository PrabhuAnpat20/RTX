import React from 'react'
import { useSelector } from 'react-redux'

function DisplayUser() {
    const data = useSelector((state)=>state.users)
    return (
        
           data.map((user,id)=>{
             return  <li key={id} className=' p-2 my-2 bg-yellow-300'>{user}</li>
           })
        
    )
}

export default DisplayUser
