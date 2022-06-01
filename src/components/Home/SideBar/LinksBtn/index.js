import React from 'react';
import { Button, Box } from '@chakra-ui/react';

const LinkBtn = () => {

    const links = [{
            id: 0,
            name: 'Home'
        },
        {
            id: 1,
            name: 'Cards'
        }
    ]

    return ( <
        >
        <
        Box > {
            links.map(l => {
                return ( <
                    >
                    <
                    Button key = { l.id } >
                    { l.name } <
                    /Button> <
                    />
                )
            })
        } <
        /Box> <
        />
    )
}

export default LinkBtn;