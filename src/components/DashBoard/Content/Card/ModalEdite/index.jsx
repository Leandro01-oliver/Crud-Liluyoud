import React,{useContext} from 'react'
import { updateCard } from '../../../../../../utils/database/card/db'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { ContextUser } from '../../../../../../context/contextUser';
import {GrClose} from 'react-icons/gr';

const ModalEdite = () => {
    const { 
        user,
        cardId,
        showEdit,
        handlerEdit,
        title,
        setTitle,
        description,
        setDescription
       } = useContext(ContextUser);

    const handleEdite = () => {
        if(title === "" && description === ""){
            alert("Preencha todos os campos")
        }else{
            updateCard(cardId,user.displayName,title,description)
        }
    }
  return (
    <>
  <Box
      w={'100%'}
      bg={'rgba(0,0,0,0.5)'}
      position={'absolute'}
      top={'0'}
      left={'0'}
      display={showEdit ? 'block' : 'none'}
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
              onChange={(e)=>{setTitle(e.target.value)}}
             />
              <Input
              my={'1rem'}
              onChange={(e)=>{setDescription(e.target.value)}}
             />
             <Button
             w={'100%'}
             mb={'1rem'}
             onClick={handleEdite}
             >
                 Editar
             </Button>
             <Button
              w={'100%'}
              onClick={handlerEdit}
             >
                 Voltar
             </Button>
         </form>
     </Box>
    </>
  )
}

export default ModalEdite