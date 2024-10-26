// AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../Config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                let userName = currentUser.displayName || ''; // Google Login name

                // Check Firestore if login is via email/password
                if (!userName) {
                    const userDocRef = doc(db, 'Users', currentUser.name);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        userName = userDoc.data().name; // Use the name from Firestore
                    }
                }

                setUser({
                    ...currentUser,
                    name: userName,
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};
