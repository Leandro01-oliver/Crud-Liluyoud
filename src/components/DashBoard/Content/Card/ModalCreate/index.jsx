import React,{useContext} from 'react'
import { addCard } from '../../../../../../utils/database/card/db'
import { Box, Input,Button, Text, Flex } from '@chakra-ui/react'
import { ContextUser } from '../../../../../../context/contextUser';
import {GrClose} from 'react-icons/gr';

const ModalCreate = () => {
    
    const { 
        user,
        showCreate,
        handlerCreate,
        title,
        setTitle,
        description,
        setDescription
       } = useContext(ContextUser);

    const handleCreate = () => {
        if(title === "" && description === ""){
            alert("Preencha todos os campos")
        }else{
            addCard(user.displayName,title,description)
        }
    }

  return (
    <>
     <Box
     display={showCreate ? 'block' : 'none'}
        w={'100%'}
        bg={'rgba(0,0,0,0.5)'}
        position={'absolute'}
        top={'0'}
        left={'0'}
        zIndex={'1000'}
        minH={'100vh'}
        p={'1rem'}
     >
         <form
         style={{
            width:'100%',
            maxWidth:'500px',
            backgroundColor:'#fff',
            margin:'0 auto',
            padding:'1rem',
            borderRadius:'20px',
            position:'relative'
         }}
         >
             <Input
             placeholder={'Titulo'}
              onChange={(e)=>{setTitle(e.target.value)}}
             />
              <Input
              my={'1rem'}
              placeholder={'Descrição'}
              onChange={(e)=>{setDescription(e.target.value)}}
             />
             <Button
             onClick={handleCreate}
             w={'100%'}
             mb={'1rem'}
             >
                 Salvar
             </Button>
             <Button
                w={'100%'}
              onClick={handlerCreate}
             >
                 Voltar
             </Button>
             
         </form>
     </Box>
    </>
  )
}

export default ModalCreate