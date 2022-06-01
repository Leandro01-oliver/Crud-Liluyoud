
import { createContext, useState, useEffect } from "react";
import { auth } from "../config/connectingFirebase"; 
import { onAuthStateChanged } from 'firebase/auth'

const ContextUser = createContext({});

const ContextUserProvider = ({children})=>{

    const [user, setUser] = useState([]);

    const [showUser, setShowUser] = useState(false);

    const handlerShow = () => setShowUser(!showUser);

    const [showMenu, setShowMenu] = useState(false);

    const handlerOpen = () => setShowMenu(!showMenu);

    const value = {user,setUser,showUser,handlerShow,showMenu,handlerOpen};

    useEffect(()=>{
        onAuthStateChanged(auth, (u)=>{
            setUser(u);
        });
    },[])

    return(
        <>
            <ContextUser.Provider value={value}>
                 {children}
            </ContextUser.Provider>
        </>
    )
}
        


export {ContextUserProvider,ContextUser};