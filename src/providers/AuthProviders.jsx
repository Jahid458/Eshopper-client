import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"; 
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null); 
const auth = getAuth(app);

const AuthProviders = ({children}) => {


    const [user,setUsers] = useState(null);
    const [loading, setLoading] = useState(true); 


    // user create
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user signin
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(email,password)
    }

    const userLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUsers(currentUser);
            console.log('cuurent user' , currentUser);
            setLoading(false)
        })

        return () => {
            return unsubscribe();
        }
    },[])



    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        userLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;