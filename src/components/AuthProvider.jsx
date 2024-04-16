import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../firebase/Firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
// console.log(children);

    const [user,setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();

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

const logOut = () =>{
    return signOut(auth)
}
    const authInfo = {registerUser, loginUser, user, setUser, googleLogin, logOut}


    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
            //   console.log(currentUser);
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
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;