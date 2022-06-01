import React,{useContext} from 'react';
import { ContextUser } from '../../../../../../../context/contextUser';
import {Flex } from '@chakra-ui/react'
import Menu from '../../../Menu';
import AreaUser from './AreaUser'
import NavLink from './NavLink';

const SideBar = () => {

    const { showMenu } = useContext(ContextUser);

  return (
    <>
        <Flex
            w={showMenu ? '250px' : '70px'}
            minH={'100vh'}
            direction={'column'}
            bg={'red'}
            py={'1rem'}
        >
            <Menu/>
            <AreaUser/>
            <NavLink/>
        </Flex>
    </>
  )
}

export default SideBar