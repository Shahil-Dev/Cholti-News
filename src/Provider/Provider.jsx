// Provider.js
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase.confige';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const logIn = (email , password) =>{
      return signInWithEmailAndPassword(auth , email , password)
    }

    const authInfo = {
        user,
        setUser,
        signUp,
        logIn,
        logOut
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => { unSubscribe() }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;