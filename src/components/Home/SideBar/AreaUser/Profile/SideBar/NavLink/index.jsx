import { Button, Box, Text } from '@chakra-ui/react'
import React from 'react'

const  NavLink = () => {
    const links = [
        {
            id:0,
            icon: '',
            name:'Perfil'
        },
        {
            id:1,
            icon: '',
            name:'Card'
        }
    ]
  return (
    <>
     {
         links.map((l)=>{
           return(
               <>
               <Button
               key={l.id}
               >
                <Box>
                    {l.icon}
                </Box>
                <Text>
                    {l.name}
                    </Text>
               </Button>
               </>
           )
         })
     }
    </>
  )
}

export default NavLink