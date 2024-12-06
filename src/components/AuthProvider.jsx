import React, {createContext, useEffect, useState} from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import {app} from "../../firebase.config.js"

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export const authContext = createContext(null)
const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

// firebase authentications
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    // update user Profile
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // Sign out user
    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setCurrentUser(user)
            }else{
                setCurrentUser(null)
            }
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, []);

    const authInfo = {
        currentUser,
        loading,
        createUser,
        signInUser,
        updateUser,
        signOutUser,
        signInWithGoogle,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;