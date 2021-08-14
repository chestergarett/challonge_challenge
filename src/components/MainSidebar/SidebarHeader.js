import {useState,useContext,useEffect} from 'react';
import GameContext from '../../context/game-context';
import { IoAddOutline } from 'react-icons/io5';
import classes from './SidebarHeader.module.css';

import AddTournament from '../Forms/AddTournament';

const SidebarHeader = () => {
    const {selected} = useContext(GameContext)
    const [openTourna, setOpenTourna] = useState(false)

    const openTournamentHandler = () => {
        setOpenTourna(true)
    }

    const closeTournamentHandler = () => {
        setOpenTourna(false)
    }
    
    return(
    <div className={classes.header}>
        <div className={classes.heading}>
            {selected}
        </div>
        <div className={classes.toggle}>
            <IoAddOutline size={20} onClick={openTournamentHandler}/>
        </div>
        {openTourna && <AddTournament onClose={closeTournamentHandler} />} 
    </div>
    )
}

export default SidebarHeader;