import React, { useEffect, useState } from 'react';
import firebase from "Firebase";
import 'firebase/auth';

function UserUID() {
    const [uid, setUID] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUID(user.uid);
            } else {
                setUID(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return <div>User UID: {uid}</div>;
}

export default UserUID;