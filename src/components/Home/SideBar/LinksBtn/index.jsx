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
            name: 'Home'
        },
        {
            id: 1,
            icon: <BsCardText/>,
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
                    <Flex 
                        key = { l.id } 
                        my={'.8rem'}
                        w={showMenu ? '80%' : '60px'}
                        bg={'red'}
                        ml={'auto'}
                        p={'.5rem'}
                        py={'.8rem'}
                        color={'#fff'}
                        justify={showMenu ? 'normal' : 'center'}
                        borderRadius = { '40px 0 0 40px' }
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
                    </>
                )
            })
        } 
        </Box> 
        </>
    )
}

export default LinkBtn;