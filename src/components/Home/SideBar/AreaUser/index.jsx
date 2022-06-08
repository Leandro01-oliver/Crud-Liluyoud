import React,{useContext,useEffect} from 'react';
import { ContextUser } from '../../../../../context/contextUser';
import { Avatar, Flex, Box } from '@chakra-ui/react';
import { openUserPoup, closeUserPoup } from '../../../../../utils/authentication/auth';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { MdOutlineSpaceDashboard } from 'react-icons/md';


const AreaUser = () => {

    const { user, handlerShow, showUser, showMenu } = useContext(ContextUser);

    return ( 
        <>
            <Flex 
               w = { showMenu ? '90%' : '62.5px' }
               p = { '.5rem' }
               borderRadius = {showMenu ? {sm:'40px',md:'40px 0 0 40px'} : '40px 0 0 40px' }
               bg = { 'red' }
               m={showMenu ? {sm:'1rem auto 0 auto',md:'1rem 0 0 auto '} : '1rem 0 0 auto'}
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
                        px={'1rem'}
                        borderRadius={'0 40px 40px 0'}
                        >
                             <Flex
                                    w={'30px'}
                                    h={'30px'}
                                    borderRadius={'50%'}
                                    bg={'#fff'}
                                    color={'red'}
                                    justify={'center'}
                                    align={'center'}
                                    mX={'1rem'}
                                    >
                                        {user ? <GoSignOut onClick={closeUserPoup} /> : <GoSignIn onClick={openUserPoup} />}
                                    </Flex>
                                    <Box w={'2.5px'}  display={'block'} h={'30px'} borderRadius={'40px'} bg={'#fff'}  mx={'.8rem'}></Box>
                                    <a
                                        href='/dashboard/'
                                        target={'_blank'}
                                    >
                                        <Flex
                                        w={'30px'}
                                        h={'30px'}
                                        display={'flex'}
                                        borderRadius={'50%'}
                                        bg={'#fff'}
                                        color={'red'}
                                        justify={'center'}
                                        align={'center'}
                                        >
                                            <MdOutlineSpaceDashboard/>
                                        </Flex>
                                    </a>
                             </Flex> 
                        :
                       <Flex
                       display={showUser ? 'flex' : 'none'}
                       position={'absolute'}
                       right={user ? '-7rem' : '-2.9rem'}
                       bg={'red'}
                       py={'.5rem'}
                       borderRadius={'0 40px 40px 0'}
                        >
                                 <Flex
                                    w={'30px'}
                                    h={'30px'}
                                    borderRadius={'50%'}
                                    bg={'#fff'}
                                    color={'red'}
                                    justify={'center'}
                                    align={'center'}
                                    mr={user ? '0' : '.5rem'}
                                    ml={user ? '.5rem' : '.5rem'}
                                    >
                                        {user ? <GoSignOut onClick={closeUserPoup} /> : <GoSignIn onClick={openUserPoup} />}
                                    </Flex>
                                    <Box w={'2.5px'}  display={user ? 'block' : 'none'} h={'30px'} borderRadius={'40px'} bg={'#fff'}  mx={'.8rem'}></Box>
                                    <a
                                        href='/dashboard/'
                                        target={'_blank'}
                                    >
                                        <Flex
                                        w={'30px'}
                                        h={'30px'}
                                        display={user ? 'flex' : 'none'}
                                        borderRadius={'50%'}
                                        bg={'#fff'}
                                        color={'red'}
                                        mr={user ? '1rem' : '0'}
                                        justify={'center'}
                                        align={'center'}
                                        >
                                            <MdOutlineSpaceDashboard/>
                                        </Flex>
                                    </a>
                             </Flex> 
                    }
           </Flex> 
        </>
    );
}

export default AreaUser;