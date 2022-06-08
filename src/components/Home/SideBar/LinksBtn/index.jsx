import React,{useContext} from 'react';
import { ContextUser } from '../../../../../context/contextUser';
import { Flex, Box, Text } from '@chakra-ui/react';
import {AiOutlineHome} from 'react-icons/ai'
import {BsCardText} from 'react-icons/bs'

const LinkBtn = () => {

    const { showMenu } = useContext(ContextUser);

    const links = [{
            id: 0,
            icon: <AiOutlineHome/>,
            link:'./',
            name: 'Home'
        },
        {
            id: 1,
            icon: <BsCardText/>,
            link:'./card/',
            name: 'Cards'
        }
    ]

    return ( 
        <>
        <Box 
        > 
            {
            links.map(l => {
                return ( 
                    <>
               <a href={l.link}>
                    <Flex 
                        key = { l.id } 
                        my={'.8rem'}
                        w={showMenu ? '80%' : '60px'}
                        bg={'red'}
                        p={'.5rem'}
                        py={'.8rem'}
                        color={'#fff'}
                        title={l.name}
                        justify={showMenu ? 'normal' : 'center'}
                        borderRadius = {showMenu ? {sm:'40px',md:'40px 0 0 40px'} : '40px 0 0 40px' }
                        m={showMenu ? {sm:'1rem auto 0 auto',md:'1rem 0 0 auto '} : '1rem 0 0 auto'}
                        cursor={'pointer'}
                        align={'center'}
                    >
                        <Box
                         mx={'.8rem'}
                        >
                            {l.icon}
                        </Box>
                        <Text
                        display={showMenu ? 'block' : 'none'}
                       
                        >
                            { l.name }     
                        </Text> 
                    </Flex> 
                    </a>
                    </>
                )
            })
        } 
        </Box> 
        </>
    )
}

export default LinkBtn;