import React,{useContext} from 'react'
import { Text, SimpleGrid, Box } from '@chakra-ui/react';
import { ContextUser } from '../../../../context/contextUser';

const Card = () =>{

    const { showMenu, cards, user } = useContext(ContextUser);

  return (
    <>
      <Box
      bg={'blue'}
       w={showMenu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
      >
       <SimpleGrid
           columns={{sm:'1',md:'2',lg:'4'}}
           gap={'10px'}
           >
             {
                 cards?.map((c)=>{
                    return(
                      <>
                          <Box
                          key={c.id}
                          mx={'auto'}
                          w={'100%'}
                          maxW={'300px'}
                          p={'1rem'}
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

export default Card