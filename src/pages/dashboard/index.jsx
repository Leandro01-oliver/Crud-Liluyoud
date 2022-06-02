import React from 'react'
import { ContextUserProvider } from '../../../context/contextUser'
import ProfileUser from '../../components/DashBoard/'

const DashBoard = () => {

  return (
    <>
        <ContextUserProvider>
            <ProfileUser />
        </ContextUserProvider>
    </>
  )
}

export default DashBoard