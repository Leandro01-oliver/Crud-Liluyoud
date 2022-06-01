import React from 'react';
import { Flex } from "@chakra-ui/react"
import Logo from './Logo';
import LinkBtn from './LinksBtn';
import AreaUser from './AreaUser';

const SideBar = () => {
    return ( <
        >
        <
        Flex w = { '70px' }
        minH = { '100vh' }
        direction = { 'column' }
        bg = { '#fff' } >
        <
        Logo / >
        <
        LinkBtn / >
        <
        AreaUser / >
        <
        /Flex> <
        />
    );
}

export default SideBar;