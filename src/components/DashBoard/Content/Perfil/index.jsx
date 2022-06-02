import React,{useContext} from 'react'
import { Flex, Image, Text, Box } from '@chakra-ui/react'
import { ContextUser } from '../../../../../context/contextUser';

const PerfilUser = () => {

  const { showMenu, user } = useContext(ContextUser);

  return (
    <>
        <Flex
         bg={'blue'}
         w={showMenu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
         minH={'100vh'}
         p={'1rem'} 
         direction={'column'}
        >
         <Flex
         boxShadow={'0 0 10px rgba(0,0,0,0.25)'}
         p={'1rem'}
         direction={{sm:'column',lg:'row'}}
         borderRadius={'5px'}
         align={'center'}
         position={'relative'}
         >
            <Image
              src={user.photoURL}
              borderRadius={'10px'}
              cursor={'pointer'}
              w={{sm:'80px',lg:'100px'}}
              h={{sm:'80px',lg:'100px'}}
              mx={{sm:'auto',lg:'0'}}
            />
            <Flex
            direction={'column'}
            textAlign={{sm:'center',lg:'start'}}
            >
            <Box
            mt={{sm:'1rem',lg:'0'}}
            >
              <Text
              ml={'1rem'}
              color={'#fff'}
              fontWeight={'bold'}
              >
                {user.displayName}
              </Text>
              </Box>
              <Box>
              <Text
              ml={'1rem'}
              color={'#fff'}
              fontWeight={'bold'}
              >
                {user.email}
              </Text>
              </Box>
            </Flex>
            <Flex
             position={'absolute'}
             top={'1rem'}
             right={'1rem'}
            >
              <Flex
                w={'30px'}
                h={'30px'}
                bg={'red'}
                borderRadius={'50%'}
                color={'#fff'}
                align={'center'}
                cursor={'pointer'}
                justify={'center'}
              >
                V
              </Flex>
              <Flex
                w={'30px'}
                h={'30px'}
                bg={'red'}
                ml={'1rem'}
                borderRadius={'50%'}
                color={'#fff'}
                align={'center'}
                cursor={'pointer'}
                justify={'center'}
              >
                E
                </Flex>
            </Flex>
         </Flex>
        </Flex>
    </>
  )
}

export default PerfilUser