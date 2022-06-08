
import { createContext, useState, useEffect } from "react";
import { db } from "../config/connectingFirebase";
import { collection, getDocs } from "firebase/firestore";
import { auth } from "../config/connectingFirebase"; 
import { onAuthStateChanged } from 'firebase/auth'

const ContextUser = createContext({});

const ContextUserProvider = ({children})=>{

    const [user, setUser] = useState([]);

    const [userData, setUserData] = useState([]);

    const [cardId, setCardId] = useState([]);


    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

    const [showView,setShowView] = useState(false);

    const [showEdit,setShowEdit] = useState(false);

    const [showCreate,setShowCreate] = useState(false);

    const [cards,setCards] = useState([]);

    const [showUser, setShowUser] = useState(false);

    const [showData, setShowData] = useState(false);

    const handlerShow = () => setShowUser(!showUser);

    const [showMenu, setShowMenu] = useState(false);

    const handlerOpen = () => setShowMenu(!showMenu);

    const handlerView = () => setShowView(!showView);

    const handlerEdit = () => setShowEdit(!showEdit);

    const handlerCreate = () => setShowCreate(!showCreate);

    const [search,setSearch] = useState('');

    const [name,setName] = useState('');

    const [sobreName,setsobreName] = useState('');

    const [tel,setTel] = useState('');

    const [email,setEmail] = useState('');

    const getUsers = async () => {
        const refColection = collection(db,'users');
        const data = await getDocs(refColection);
        setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      const getCards = async () => {
        const refColection = collection(db,'cards');
        const data = await getDocs(refColection);
        setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

    const value = {
                    user,
                    setUser,
                    showUser,
                    handlerShow,
                    showMenu,
                    handlerOpen,
                    name,
                    setName,
                    sobreName,
                    setsobreName,
                    tel,
                    setTel,
                    email,
                    setEmail,
                    setShowData,
                    showData,
                    userData,
                    setUserData,
                    showView,
                    handlerView,
                    cards,
                    handlerEdit,
                    handlerCreate,
                    showEdit,
                    showCreate,
                    title,
                    setTitle,
                    description,
                    setDescription,
                    cardId,
                    setCardId,
                    search,
                    setSearch
                };


    useEffect(()=>{
        onAuthStateChanged(auth, (u)=>{
            setUser(u);
        });
        getUsers();
        getCards();
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