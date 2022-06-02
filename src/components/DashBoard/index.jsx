import { Flex } from '@chakra-ui/react'
import React from 'react'
import Content from './Content/'
import SideBar from './SideBar/'

const ProfileUser = () => {
  return (
    <>
        <Flex>
         <SideBar/>
         <Content/>
        </Flex>
    </>
  )
}

export default ProfileUser