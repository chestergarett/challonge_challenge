import classes from './Login.module.css';
import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';
import {Fab} from '@material-ui/core';

import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';

const Login = ({auth}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const signInWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider);
    }

    return(
        <div className={classes.login}>
            <div className={classes.container}>
                    <div className={classes.heading}>
                        <h2>Welcome back!</h2>
                        <span>We're so excited to see you again!</span>
                    </div>
                    <div className={classes.input}>
                        <Fab variant="extended" 
                            onClick={signInWithGoogle} 
                            style={{marginBottom: '1rem', padding: '1rem', background: '#2c3539e8', color: 'whitesmoke'}}
                        >
                            <FcGoogle style={{marginRight: '.5rem'}} size={20}/>
                                Sign In with Google
                        </Fab>
                        <Fab variant="extended" 
                            onClick={signInWithFacebook} 
                            style={{marginBottom: '1rem', padding: '1rem', background: '#2c3539e8', color: 'whitesmoke'}}
                        >
                            <FaFacebook style={{marginRight: '.5rem', color: '#4267B2'}} size={20}/>
                                Sign In with Facebook
                        </Fab>
                        <p>OAuth2 feature powered by Firebase.</p>
                    </div>
            </div>
        </div>
    )

}

export default Login;
