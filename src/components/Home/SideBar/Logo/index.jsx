import React from 'react';
import Image from "next/image";
import LogoImg  from "../../../../../public/logo.png"
import { Box } from '@chakra-ui/react';

const Logo = () => {

    return ( 
        <>
        <Box
            mx={'auto'}
            mt={'1.5rem'}
        >
            <Image 
                src = {LogoImg}
                width={'50px'}
                height={'50px'}
            /> 
        </Box>
        </>
    );
}

export default Logo;