import React,{useContext} from 'react'
import { Flex, Text, FormControl, Input, SimpleGrid, Box } from '@chakra-ui/react'
import { ContextUser } from '../../../../../context/contextUser';
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import {IoIosCreate} from 'react-icons/io'
import {GrView,GrFormViewHide} from 'react-icons/gr'
import ModalCreate from './ModalCreate';
import ModalEdite from './ModalEdite';
import { deleteCard } from '../../../../../utils/database/card/db';

const CardUser = () => {
    
  const { 
    user,
    showMenu, 
    showView, 
    handlerView,
    cards, 
    handlerEdit,
    handlerCreate, 
    showEdit, 
    showCreate, 
    setNickName, 
    title,
    setTitle,
    description,
    setDescription,
    cardId,
    setCardId, 
    search, 
    setSearch
   } = useContext(ContextUser);

cards.map(u=>{console.log(u)})

const handlerDelite = (id) =>{
    deleteCard(id)
}

  return (
    <>
        <Box
         bg={'blue'}
         w={showMenu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
         minH={'100vh'}
         p={'1rem'} 
        >
          <Flex
           w={'100%'}
           p={'1rem'}
           align={'center'}
           justify={showView ? 'space-between' : 'center'}
            boxShadow={' 0 0 10px 0 rgba(0,0,0,0.1)'}
            borderRadius={'10px'}
          >
            {/* <Box
                display={showView ? 'block' : 'none'}
            >
              <Input
              onChange={(e)=>setSearch(e.target.value)}
              />
            </Box> */}
            <Flex
            >
            <Flex
              w={'30px'}
              h={'30px'}
              borderRadius={'50%'}
              border={'2px solid #fff'}
              cursor={'pointer'}
              color={'#fff'}
              mr={'1rem'}
              justify={'center'}
              align={'center'}
              onClick={handlerView}
              >
                {
                  showView ?  <GrView/> : <GrFormViewHide/>
                }
              </Flex>
              <Flex
              w={'30px'}
              h={'30px'}
              borderRadius={'50%'}
              cursor={'pointer'}
              border={'2px solid #fff'}
              color={'#fff'}
              justify={'center'}
              align={'center'}
              onClick={handlerCreate}
              >
                  <IoIosCreate/>
              </Flex>
            </Flex>
          </Flex>
           <SimpleGrid
           columns={{sm:'1',md:'2',lg:'4'}}
           gap={'10px'}
           display={showView ? 'grid' : 'none'}
           >
             {
                 cards?.map((c)=>{
                   if(user.displayName == c.NickName)
                    return(
                      <>
                        <Flex
                        w={'100%'}
                        >
                          <Box
                          key={c.id}
                          mx={'auto'}
                          w={'100%'}
                          maxW={'300px'}
                          p={'3rem 1rem 1rem 1rem '}
                          bg={'#fff'}
                          mt={'1rem'}
                          borderRadius={'10px'}
                          position={'relative'}
                          >
                            <Flex
                            position={'absolute'}
                            top={'1rem'}
                            right={'1rem'}
                            >
                            <Flex
                            w={'30px'}
                            h={'30px'}
                            borderRadius={'50%'}
                            border={'2px solid red'}
                            mr={'.5rem'}
                            color={'red'}
                            justify={'center'}
                            align={'center'}
                            cursor={'pointer'}
                            onClick={()=>{handlerEdit(setCardId(c.id))}}
                            >
                              <AiOutlineEdit/>
                              </Flex>
                              <Flex
                                w={'30px'}
                                h={'30px'}
                                borderRadius={'50%'}
                                border={'2px solid red'}
                                color={'red'}
                                justify={'center'}
                                align={'center'}
                                cursor={'pointer'}
                                onClick={()=>{handlerDelite(c.id)}}
                              >
                              <AiOutlineDelete/>
                              </Flex>
                            </Flex>
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
                        </Flex>
                      </>
                    )
                 })
             }
           </SimpleGrid>
        </Box>

        <Flex
          display={showCreate ? 'block' : 'none'}
        >
           <ModalCreate/>
        </Flex>
        <Flex
          display={showEdit ? 'block' : 'none'}
        >
           <ModalEdite cardId={cardId} setNickName={setNickName} title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
        </Flex>

    
    </>
  )
}

export default CardUser