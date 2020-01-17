import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import './Auth.scss'

export default class Auth extends React.Component {
    loginClickEvent = (e) => {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    render() {
        return (
            <>
                <div className="Auth">
                    <button id="google-auth" className="btn btn-secondary" onClick={this.loginClickEvent}>
                        {/* <img src={googleImage} alt="Google Auth Button" /> */}
                        Login With Google
                    </button>
                </div>
            </>
        )
    }
}