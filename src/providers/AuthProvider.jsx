import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    /* step 8.1 for logIN */
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    /* step 7.3 for logout */
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

        /* after step-7.1 auth state observer */
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth state changes',currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unSubscribe(); /* 7.2 for cleaning */
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut , /* step 7.4 */
          
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;

