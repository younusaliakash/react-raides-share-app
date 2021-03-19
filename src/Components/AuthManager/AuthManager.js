import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () =>{
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
}

export const handleGoogleSingIn = () => {
  const googleSingInProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleSingInProvider)
    .then((result) => {
      let user = result.user;
      const {displayName , email, photoURL} = user;
      const loggedInUser = {
          isLoggedIn : true,
          name : displayName,
          email : email,
          photo : photoURL,
          successStatus : true
      };
      return loggedInUser;
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const handleFacebookSingIn = () => {
    const facebookSingINProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(facebookSingINProvider)
      .then((result) => {
        let user = result.user;
        const {displayName , email, photoURL} = user;
        const loggedInUser = {
          isLoggedIn : true,
          name : displayName,
          email : email,
          photo : photoURL,
          successStatus : true
      };
      return loggedInUser;
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

const AuthManager = () => {
  return <div></div>;
};

export default AuthManager;
