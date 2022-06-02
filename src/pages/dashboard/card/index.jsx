import React from 'react'
import { Flex } from '@chakra-ui/react'
import { ContextUserProvider } from '../../../../context/contextUser'
import CardUser from '../../../components/DashBoard/Content/Card/'
import SideBar from '../../../components/DashBoard/SideBar'

const Card = () => {
  return (
    <>
   <ContextUserProvider>
        <Flex>
            <SideBar/>
            <CardUser/>
        </Flex>
   </ContextUserProvider>
    </>
  )
}

export default Card