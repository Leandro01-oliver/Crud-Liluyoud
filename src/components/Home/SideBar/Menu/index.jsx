import React,{useContext,useEffect} from 'react';
import { ContextUser } from '../../../../../context/contextUser';
import { Flex } from '@chakra-ui/react'
import { GiHamburgerMenu }  from 'react-icons/gi'
import { MdOutlineClose }  from 'react-icons/md'

const  Menu = () => {

    const { showMenu, handlerOpen } = useContext(ContextUser);

  return (
    <>
        <Flex
        w={'30px'}
        h={'30px'}
        borderRadius={'50%'}
        bg={'red'}
        color={'#fff'}
        justify={'center'}
        align={'center'}
        mx={'auto'}
        cursor={'pointer'}
        onClick={handlerOpen}
    >
        {
            showMenu ?  <MdOutlineClose /> : <GiHamburgerMenu />
        }
    </Flex>
    </>
  )
}

export default Menu