import React,{useContext} from 'react';
import { ContextUser } from '../../../../context/contextUser';
import { Flex } from '@chakra-ui/react'

const Content = () => {
    
  const { showMenu } = useContext(ContextUser);

  return (
    <>
     <Flex 
                bg={'blue'}
                w={showMenu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
                minH={'100vh'}
                p={'1rem'} 
            >
                 exeeddddddddddddd
            </Flex> 
    </>
  )
}

export default Content