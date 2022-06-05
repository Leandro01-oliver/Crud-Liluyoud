import { db } from "../../config/connectingFirebase";
import {collection,addDoc,updateDoc} from 'firebase/firestore'

const addUser = async(nome,sobrenome,telefone,email) => {
    const refColection = collection(db,'users');
   await addDoc(refColection,{
        Nome:nome,
        Sobrenome:sobrenome,
        Telefone:telefone,
        Email:email
    })

}

const updateUser = async(id,nome,sobrenome,telefone,email) => {
    const refIdColection = collection(db,'users',id);
   await updateDoc(refIdColection,{
        Nome:nome,
        Sobrenome:sobrenome,
        Telefone:telefone,
        Email:email
    })

}

export {addUser,updateUser};