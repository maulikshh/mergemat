import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../config/firebase'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // async function signup(firstName, lastName, email, password,) {
    //     try {
    //         const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    //         const { user } = userCredential

    //         // Add user details to Firestore
    //         const ref = doc(db, "users",)
    //         const docRef = await addDoc(collection(db, "users"), {
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email
    //         })
    //         console.log("Document written with ID:", docRef.id)
    //         // You can return additional information if needed
    //         return user;

    //     } catch (e) {
    //         // Handle errors here
    //         console.error("Error during signup:", e);

    //     }
    // }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }




    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)


    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail

    }

    function updatePassword(password) {
        return currentUser.updatePassword

    }



    useEffect(() => {
        const unsubscribe =
            auth.onAuthStateChanged(user => {
                setCurrentUser(user)
                setLoading(false)

            })
        return unsubscribe

    }, [])

    const value = {
        currentUser, login, logout, resetPassword, updateEmail, updatePassword, signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}

        </AuthContext.Provider>
    )
}