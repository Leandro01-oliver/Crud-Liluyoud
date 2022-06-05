import { auth } from '../../config/connectingFirebase'
import { signInWithPopup, signOut, GoogleAuthProvider} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const openUserPoup = () => {

    try{
        signInWithPopup(auth,googleProvider)
        .then((res)=>{ 
            console.log('success')
    })
        .catch(error=>{ console.log(error)});
    }catch(error){
        console.log(error);
    }

}

const closeUserPoup = () => {

    try{
        signOut(auth)
        .then(()=>{ console.log('success')})
        .catch(error=>{ console.log(error)});
    }catch(error){
        console.log(error);
    }

}

export {openUserPoup,closeUserPoup};