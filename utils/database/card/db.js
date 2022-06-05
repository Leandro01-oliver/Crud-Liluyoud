import { db } from "../../../config/connectingFirebase";
import {collection,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore'

const addCard = async(nickname,title,description) => {
    const refColection = collection(db,'cards');
   await addDoc(refColection,{
        NickName: nickname,
        Title:title,
        Description:description,
    })
    .then(()=>{
        console.log('success');
        setTimeout(()=>{
            window.location.href = '/dashboard/card';
        },3000)
    })
    .catch(error=>{console.log(error)});

}

const updateCard = async(id,nickname,title,description) => {
    const refIdDoc = doc(db,'cards',id);
   await updateDoc(refIdDoc,{
    NickName: nickname,
    Title:title,
    Description:description,
    })
    .then(()=>{
        console.log('success');
        setTimeout(()=>{
            window.location.href = '/dashboard/card';
        },3000)
    })
    .catch(error=>{console.log(error)});

}

const deleteCard = async(id) => {
    if(deleteDoc)
    await deleteDoc(doc(db,'cards',id))
        console.log('success');
        setTimeout(()=>{
            window.location.href = '/dashboard/card';
        },3000) 
}


export {addCard,updateCard,deleteCard};