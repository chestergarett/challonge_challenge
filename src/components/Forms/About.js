import CenteredModal from '../UI/Modals/CenteredModal';
import classes from './About.module.css';

const About = (props) => {

    return (
        <CenteredModal onClose={props.onClose}>
            <div className={classes.about}>
                <h2>Tournament App powered by Challonge API.</h2>
                <h2>User Login Feature powered by Firebase.</h2>
                <p>In this app, you can create a tournament, 
                    <br/>add a participant,
                    <br/>change tournament state, 
                    <br/>update tournament & 
                    <br /> delete tournament.
                </p>
                <p>
                    Tournament API currently has no websocket available. Any form submissions, page needs to be refreshed.
                </p>
            </div>
        </CenteredModal>
    )
}

export default About;