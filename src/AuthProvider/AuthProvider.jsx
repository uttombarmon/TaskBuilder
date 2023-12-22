/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig/FirebaseConfig";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unSubcribe = () => {
            onAuthStateChanged(auth, cuser => {
                setUser(cuser)
                setLoading(false)
            })
        }
        return unSubcribe();
    }, [])

    // user register by email and password
    const creatuserwithemail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login by google 
    const provider = new GoogleAuthProvider()
    const signupWihtGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // user login by email and password 
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    const logOut = () => {
        return signOut(auth)
    }
    const localData ={
        user,
        loading,
        creatuserwithemail,
        signInWithEmail,
        signupWihtGoogle,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={localData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;