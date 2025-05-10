import React, { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext =createContext();
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password).finally(()=> setLoading(false))
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password).finally(()=> setLoading(false))
    }

    const updateUser =(updateData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser , updateData).finally(()=> setLoading(false));
    }

    const loginWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, provider).finally(()=> setLoading(false));
    }
    const forgotPassword = (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email).finally(()=>setLoading(false))
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
        updateUser,
        loginWithGoogle,
        forgotPassword
    }
  return <AuthContext value={authData}>{children}</AuthContext >
}
