import React from 'react'
import { Flex } from '@chakra-ui/react'
import { ContextUserProvider } from '../../../context/contextUser'
import Card from '../../components/Home/Card'
import SideBar from '../../components/Home/SideBar'

const CardView = () => {

  return (
    <>
         <ContextUserProvider>
                <Flex>
                    <SideBar/>
                    <Card/>
                </Flex>
         </ContextUserProvider>
    </>
  )
}

export default CardView