import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider} from "firebase/auth";
import { auth } from "../firebase/Firebase.init";
// import { GithubAuthProvider } from "firebase/auth";

// step 1---
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
// console.log(children);

    const [user,setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const registerUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
        // .then(result=> console.log(result.user) )
    }

    const loginUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
        // .then(result=> console.log(result, result.user))
    }


const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
    
}

const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider)
    
}

const logOut = () =>{
    return signOut(auth)
}
    const authInfo = {registerUser, loginUser, user, setUser, googleLogin, logOut, githubLogin}


    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              console.log(currentUser);
            setUser(currentUser)
            } 
            else {
            //  console.log('logged out');
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