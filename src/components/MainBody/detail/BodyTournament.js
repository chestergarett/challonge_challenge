import {useContext} from 'react';
import GameContext from '../../../context/game-context';
import classes from './BodyTournament.module.css';
import BodyInput from './BodyInput';
import dateHelper from '../../../helpers/formatDate';
import LoadingSpinner from '../../UI/LoadingSpinner';

const BodyTournament = () => {

    const{selectedURL, tournaLoading, selectedTournaDetails} = useContext(GameContext)
    const formattedDate = dateHelper(selectedTournaDetails.startsAt)

    return(
        <div className={classes.body}>
            {!tournaLoading ?
                <div className={classes.mainStream}>
                    <div className={classes.headerItems}>
                        <span> {selectedTournaDetails.tournament_type} </span>
                        <span> {selectedTournaDetails.state} </span>
                        <span> {formattedDate} </span>
                    </div>
                    <p style={{fontSize: '12px'}}><em>{selectedTournaDetails.description}</em></p>
                    <table className={classes.table}>
                        <tr>
                            <th>Participants</th>
                            <th>Seed</th>
                        </tr> 
                        {selectedTournaDetails.participants.map(participant =>{
                        return (
                            <tr key={participant.id} id={participant.id}>
                                <td>{participant.attributes.name}</td>
                                <td className={classes.seed}>{participant.attributes.seed}</td>
                            </tr>)
                        })} 
                    </table>
                    <div className={classes.headerItems_2}>
                        <span> BRACKETS </span>
                    </div>
                    <div className={classes.embedded}>
                        <iframe src={`https://challonge.com/${selectedURL}/module`} width="90%" height="400" frameBorder="0" scrolling="auto" allowtransparency="true"></iframe>
                    </div>
                </div> : <LoadingSpinner/>}
            <div className={classes.richText}>
                <BodyInput/>
            </div>
        </div>
    )
}

export default BodyTournament;