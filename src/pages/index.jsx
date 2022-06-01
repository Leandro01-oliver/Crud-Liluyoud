import React from "react";
import { Flex } from "@chakra-ui/react"
import { ContextUserProvider, ContextUser } from "../../context/contextUser";
import SideBar from "../components/Home/SideBar";
import Content from "../components/Home/Content";

const Home = () => {

    return ( 
                <>
                <ContextUserProvider>
                    <Flex>
                        <SideBar />
                        <Content />
                    </Flex> 
                </ContextUserProvider>
                </>
            )
}

            export default Home