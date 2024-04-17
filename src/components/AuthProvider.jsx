import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider} from "firebase/auth";
import { auth } from "../firebase/Firebase.init";
// import { GithubAuthProvider } from "firebase/auth";

// step 1---
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
// console.log(children);

    const [user,setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const registerUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
        // .then(result=> console.log(result.user) )
    }

    const loginUser = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
        // .then(result=> console.log(result, result.user))
    }


const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
    
}

const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
    
}

const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}
    const authInfo = {registerUser, loginUser, user, setUser, googleLogin, logOut, githubLogin, loading}


    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
            } 
            else {
            //  console.log('logged out');
            setLoading(false)
            setUser(null)
            }
          });

          return ()=>{
            unsubscribe()
          }
    },[])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;