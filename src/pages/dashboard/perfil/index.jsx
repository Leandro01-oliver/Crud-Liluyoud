import React from 'react'
import { Flex } from '@chakra-ui/react'
import { ContextUserProvider } from '../../../../context/contextUser'
import PerfilUser from '../../../components/DashBoard/Content/Perfil' 
import SideBar from '../../../components/DashBoard/SideBar'

const Perfil = () => {
  return (
    <>
     <ContextUserProvider>
        <Flex>
        <SideBar/>
          <PerfilUser/>
        </Flex>
     </ContextUserProvider>

    </>
  )
}

export default Perfil