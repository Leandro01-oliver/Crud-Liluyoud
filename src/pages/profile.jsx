import React from 'react'
import { ContextUserProvider } from '../../context/contextUser'
import ProfileUser from '../components/Home/SideBar/AreaUser/Profile'

const Profile = () => {

  return (
    <>
        <ContextUserProvider>
            <ProfileUser />
        </ContextUserProvider>
    </>
  )
}

export default Profile