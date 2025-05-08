import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null); 
const auth = getAuth(app);

const AuthProviders = ({children}) => {


    const [user,setUsers] = useState(null);
    const [loading, setLoading] = useState(true); 
    const googleProvider = new GoogleAuthProvider();



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
    // Google Signin

    const SignInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }


    const userLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUsers(currentUser);
            console.log('cuurent user--> ' , currentUser);
            setLoading(false)
        })

        return () => {
            return unsubscribe();
        }
    },[])



    const authInfo ={
        user,
        setUsers,
        loading,
        createUser,
        signInUser,
        userLogOut,
        SignInGoogle,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;