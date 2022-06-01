import React,{useContext} from 'react';
import { ContextUser } from '../../../../context/contextUser'; 
import { Flex } from "@chakra-ui/react"
import Menu from './Menu'
import Logo from './Logo';
import LinkBtn from './LinksBtn';
import AreaUser from './AreaUser';

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
                        <Menu/>
                        <Logo />
                        <LinkBtn />
                        <AreaUser />
                </Flex> 
            </>
            );
}

            export default SideBar;