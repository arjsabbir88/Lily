import React, { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContext =createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        return signOut(auth);
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
    
        return ()=>{
            unsubscribe()
        }

    },[])

    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        signInWithGoogle
    }
  return <AuthContext.Provider   value={authData}>{children}</AuthContext.Provider >
}
