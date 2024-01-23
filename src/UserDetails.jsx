import React from 'react'
import { fakeUserData } from './api'
import { useDispatch } from 'react-redux';
import { addUser } from './slice';
import DisplayUser from './DisplayUser';
function UserDetails() {
    const dispatch =useDispatch();
const addNewUser=(name)=>{
       console.log(name);
       dispatch(addUser(name))
}

    return (
        <div className=' flex justify-center'>
        
            <div  className=' w-1/2'>
                <div className=' flex justify-between my-4'>
                    <h1 className=' text-3xl'>List of all users</h1>
                    {/* <button className=' border-red-600'>Add new User</button> */}
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>addNewUser(fakeUserData())}>Add New User</button>
                </div>
                <div className=' flex justify-center'>
                <ul className=' text-black' >
                    <DisplayUser/>
                    
                </ul>
                </div>
            </div>
           
        </div>
    )
}

export default UserDetails
