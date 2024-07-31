import React from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogOut = () => {
        logOut().then(() => {
            alert('Sign-out successfully!!')
            navigate(from, {replace: true})
        }).catch((error) => {
            console.error('Failed to sign-out:', error);
            alert('Failed to sign-out. Please try again.');
        })
    }

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogOut} > LogOut</button>
    </div>
  )
}

export default Logout
