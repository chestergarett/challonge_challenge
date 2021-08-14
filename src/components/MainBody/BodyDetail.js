import classes from './BodyDetail.module.css';
import BodyTournament from './detail/BodyTournament';
import BodyChat from './detail/BodyChat';


const BodyDetail = () => {

    return (
        <div className={classes.bodyDetail}>
            <div className={classes.bodyTournament}>
                <BodyTournament />
            </div>
            <div className={classes.bodyChat}>
                <BodyChat />
            </div>
        </div>
    )
}

export default BodyDetail;
