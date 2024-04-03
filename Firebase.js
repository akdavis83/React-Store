import { initializeApp } from "firebase/app";


import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";


 
const firebaseConfig = {
  apiKey: "AIzaSyDBueXTtTTLmdtAZTs8SHrr2aDIq6GWm6g",
  authDomain: "storage4store.firebaseapp.com",
  databaseURL: "https://storage4store-default-rtdb.firebaseio.com",
  projectId: "storage4store",
  storageBucket: "storage4store.appspot.com",
  messagingSenderId: "926104266401",
  appId: "1:926104266401:web:33adf843e7e648d652f2e0"// Initialize
}; 


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register a User
export const register = async (email, password, displayName) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
    updateProfile(auth.currentUser, { displayName });
    toast.success("Account created successfully!");
    return false;
  } catch (err) {
    toast.error(err.message.replace("Firebase:", ""));
    return true;
  }
};

// Login a User
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged In successfully!");
    return false;
  } catch (err) {
    toast.error(err.message.replace("Firebase:", ""));
    return true;
  }
};

// Sign in with google account 
export const signUpProvider = async()=>{
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
  toast.success("Logged In successfully!");
}

// sign out 
export const logout = ()=>{
  signOut(auth);
  toast.success("Logged out successfully!");
}


// Forget Password 
export const forgetPassword = async(email)=>{
  try{
    await sendPasswordResetEmail(auth, email)
    toast.success("Check your email box!");

  }catch(err){
    toast.error(err.message.replace("Firebase:", ""));
  }

}
// user observer
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) setCurrentUser(user);
    else setCurrentUser(null);
  });
};
