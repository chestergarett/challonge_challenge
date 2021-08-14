import {Card,Avatar, CardContent} from '@material-ui/core';
import classes from './ChatMessage.module.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const ChatMessage = (props) => {
    
    const auth = firebase.auth().currentUser.uid
    const {text, uid, photoURL} = props.message;
    const messageClass = uid === auth ? 'sent':'received';

    if (messageClass === 'sent'){
        return (
            <div className={`${classes.message} ${classes.sent}`}>
                <img src={photoURL} className={classes.avatarImg}/>
                <div className={`${classes.messageText} ${classes.messageSent}`}>{text}</div>
            </div>
            )
    }
    
    return(
             <div className={`${classes.message} ${classes.received}`}>
                <img src={photoURL} className={classes.avatarImg}/>
                <div className={classes.messageText}>{text}</div>
            </div>
    ) 
    
}

export default ChatMessage;