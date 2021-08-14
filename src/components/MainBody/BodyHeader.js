import 'firebase/auth';
import {useState,useContext} from 'react';
import GameContext from '../../context/game-context';
import classes from './BodyHeader.module.css';

import {HiOutlineHashtag} from 'react-icons/hi';
import {AiOutlineEdit} from 'react-icons/ai';
import {FaFlagCheckered} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {FiHelpCircle} from 'react-icons/fi';
import {IoExitOutline} from 'react-icons/io5';
import {AiFillDelete} from 'react-icons/ai';

import BodySearch from './header/BodySearch';
import AddParticipants from '../Forms/AddParticipants';
import ChangeStateTournament from '../Forms/ChangeStateTournament';
import UpdateTournament from '../Forms/UpdateTournament';
import DeleteTournament from '../Forms/DeleteTournament';
import About from '../Forms/About';

const BodyHeader = ({auth}) => {
    
    const {selectedTourna} = useContext(GameContext);
    const [openParticipants, setOpenParticipants] = useState(false)
    const [openChangeState, setOpenChangeState] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openAbout, setOpenAbout] = useState(false)

    const openParticipantsHandler = () => {
        setOpenParticipants(true)
    }

    const closeParticipantsHandler = () => {
        setOpenParticipants(false)
    }

    const openChangeStateHandler = () => {
        setOpenChangeState(true)
    }

    const closeChangeStateHandler = () => {
        setOpenChangeState(false)
    }

    const openUpdateHandler = () => {
        setOpenUpdate(true)
    }

    const closeUpdateHandler = () => {
        setOpenUpdate(false)
    }
    
    const openDeleteHandler = () => {
        setOpenDelete(true)
    }

    const closeDeleteHandler = () => {
        setOpenDelete(false)
    }
    
    const openAboutHandler = () => {
        setOpenAbout(true)
    }

    const closeAboutHandler = () => {
        setOpenAbout(false)
    }


    return (
        <div className={classes.bodyHeader}>
            <div className={classes.headerLabel}>
                <HiOutlineHashtag/>
                <span>{selectedTourna}</span>
            </div>
            <div className={classes.headerShortcut}>
                <AiOutlineEdit size={25} className='icons' onClick={openUpdateHandler}/>
                <FaFlagCheckered size={25} className='icons' onClick={openChangeStateHandler}/>
                <FaUserFriends size={25} className='icons' onClick={openParticipantsHandler}/>
                <AiFillDelete size={25} className='icons' onClick={openDeleteHandler}/>
                <BodySearch />
                <FiHelpCircle size={25} className='icons' onClick={openAboutHandler}/>
                <IoExitOutline 
                    size={25} 
                    className='icons'
                    onClick={()=>auth.signOut()}
                />
            </div>
            {openParticipants && <AddParticipants onClose={closeParticipantsHandler}/>}
            {openChangeState && <ChangeStateTournament onClose={closeChangeStateHandler}/>}
            {openUpdate && <UpdateTournament onClose={closeUpdateHandler}/>}
            {openDelete && <DeleteTournament onClose={closeDeleteHandler}/>}
            {openAbout && <About onClose={closeAboutHandler}/>}
        </div>
    )
}

export default BodyHeader;