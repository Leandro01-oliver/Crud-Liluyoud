import React,{useContext} from 'react';
import { ContextUser } from '../../../../../../../../context/contextUser';
import { Flex, Avatar, Box } from '@chakra-ui/react'
import {TbWorld} from 'react-icons/tb'

const AreaUser = () => {

    const { user, handlerShow, showUser, showMenu } = useContext(ContextUser);

  return (
    <>
       <Flex 
                w = { showMenu ? '90%' : '62.5px' }
                p = { '.5rem' }
                borderRadius = { '40px 0 0 40px' }
                bg = { 'red' }
                ml = { 'auto' }
                mt={'.5rem'}
                cursor = { 'pointer' }
                color = { '#fff' } 
                justify={showMenu ? 'space-between' : 'center'}
                align={'center'}
                position={'relative'}
                >
                    <Avatar 
                     src={user?.photoURL}
                     w={'40px'}
                     h={'40px'}
                     onClick={showMenu ?  null : handlerShow}
                    />    
  {
                        showMenu ? 
                        <Flex
                        display={'flex'}
                        bg={'red'}
                        py={'.5rem'}
                        pr={user ? '1.25rem' : '1rem'}
                        pl={user ? '0' : '1rem'}
                        borderRadius={'0 40px 40px 0'}
                       >
                      <a
                        href='/'
                        >
                            <Flex
                            w={'30px'}
                            h={'30px'}
                            borderRadius={'50%'}
                            bg={'#fff'}
                            color={'red'}
                            justify={'center'}
                            align={'center'}
                            >
                                <TbWorld/>
                            </Flex>
                        </a>
                           </Flex>
                           : 
                           <Flex
                                display={showUser ? 'flex' : 'none'}
                                position={'absolute'}
                                right={user ? '-4rem' : '-3.92rem'}
                                bg={'red'}
                                py={'.5rem'}
                                px={user ? '1.25rem' : '1rem'}
                                borderRadius={'0 40px 40px 0'}
                                >
                                    <a
                                    href='/'
                                    >
                                    <Flex
                                    w={'30px'}
                                    h={'30px'}
                                    borderRadius={'50%'}
                                    bg={'#fff'}
                                    color={'red'}
                                    justify={'center'}
                                    align={'center'}
                                    >
                                       <TbWorld/>
                                    </Flex>
                                    </a>              
                        </Flex>
                    }    
                    </Flex>
    </>
  )
}

export default AreaUser