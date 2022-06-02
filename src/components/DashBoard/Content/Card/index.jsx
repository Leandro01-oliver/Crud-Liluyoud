import React,{useContext} from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ContextUser } from '../../../../../context/contextUser';

const CardUser = () => {
    
  const { showMenu } = useContext(ContextUser);

  return (
    <>
        <Flex
         bg={'blue'}
         w={showMenu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
         minH={'100vh'}
         p={'1rem'} 
        >
         <Text>
           Card
        </Text>
        </Flex>
    </>
  )
}

export default CardUser