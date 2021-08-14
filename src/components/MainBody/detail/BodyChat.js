import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import ChatMessage from '../chat/ChatMessage';

const BodyChat = (props) => {

    const auth = firebase.auth();
    const firestore = firebase.firestore();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    return (
            <>
                {messages && messages.map( msg => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
            </>
    )
}

export default BodyChat;