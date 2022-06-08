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
                    w={showMenu ? {sm:'100%',lg:'250px'} : '70px'}
                    minH={'100vh'}
                    position={showMenu ? {sm:'absolute',md:'unset'} : 'unset'}
                    direction={'column'}
                    bg={'#fff'}
                    py={'1rem'}
                    zIndex={'1000'}
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