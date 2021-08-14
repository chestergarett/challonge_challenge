import {FaRegUserCircle} from 'react-icons/fa';
import {IoMic} from 'react-icons/io5';
import {IoMdHeadset} from 'react-icons/io';
import {IoSettingsSharp} from 'react-icons/io5'
import classes from './SidebarFooter.module.css';

const SidebarFooter = ({user}) => {

    const displayName = user.displayName.split(' ')[0] 

    return(
        <div className={classes.footer}>
            <div className={classes.user}>
                <FaRegUserCircle />
                <span>{displayName}</span>
            </div>
            <div className={classes.icons}>
                <IoMic className="icons"/>
                <IoMdHeadset className="icons"/>
                <IoSettingsSharp className="icons"/>
            </div>
        </div>
    )
}

export default SidebarFooter;