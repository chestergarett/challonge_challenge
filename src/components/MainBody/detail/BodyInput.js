import {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import classes from './BodyInput.module.css';
import {GrEmoji} from 'react-icons/gr';
import {RiFileGifFill} from 'react-icons/ri'
import {AiOutlineSend} from 'react-icons/ai'
import Picker from 'emoji-picker-react';

const BodyInput = () => {

    const [formValue, setFormValue] = useState('')
    
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');

    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;
        
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
    
        setFormValue('');
    }

    return(
        <div className={classes.editor}>
            <input type='text' className={classes.input} placeholder="Message channel" value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
            <div className={classes.richText}>
                <RiFileGifFill size={30} className="icons"/>
                <GrEmoji size={30} className="icons"/>
                <AiOutlineSend size={30} className="icons" onClick={sendMessage}/>
                {/* <Picker/> */}
            </div>
        </div>
    )
}

export default BodyInput;
