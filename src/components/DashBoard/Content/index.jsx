import React,{useContext} from 'react';
import { ContextUser } from '../../../../context/contextUser';
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'

const Content = () => {
    
  const { showMenu, cards, user } = useContext(ContextUser);

  return (
    <>
     <Box 
            bg={'blue'}
            w={showMenu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
            minH={'100vh'}
            p={'1rem'} 
            >
           <SimpleGrid
           columns={{sm:'1',md:'2',lg:'4'}}
           gap={'10px'}
           >
             {
                 cards?.map((c)=>{
                   if(user.displayName == c.NickName)
                    return(
                      <>
                          <Box
                          key={c.id}
                          mx={'auto'}
                          w={'100%'}
                          maxW={'300px'}
                          p={'1rem '}
                          bg={'#fff'}
                          mt={'1rem'}
                          borderRadius={'10px'}
                          position={'relative'}
                          >
                            <Box>
                            <Text
                            mb={'.5rem'}
                            >
                              {c.Title}
                            </Text>
                            <Text>
                            {c.Description}
                            </Text>
                            </Box>
                          </Box>
                      </>
                    )
                 })
             }
           </SimpleGrid>
            </Box> 
    </>
  )
}

export default Content