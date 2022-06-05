import React,{useContext} from 'react';
import { ContextUser } from '../../../../context/contextUser';
import { Flex,Box } from '@chakra-ui/react'
import Menu from '../../Home/SideBar/Menu';
import AreaUser from './AreaUser'; 
import NavLink from './NavLink';

const SideBar = () => {

    const { showMenu } = useContext(ContextUser);

  return (
    <>
        <Flex
            w={showMenu ? '250px' : '70px'}
            minH={'100vh'}
            direction={'column'}
            bg={'#fff'}
            py={'1rem'}
        >
          <Box
          mb={'.5rem'}
          >
            <Menu/>
          </Box>
            <AreaUser/>
            <NavLink/>
        </Flex>
    </>
  )
}

export default SideBar