import {useContext, useEffect, useState} from 'react';
import classes from './SidebarDetails.module.css';
import {HiOutlineHashtag} from 'react-icons/hi'

import GameContext from '../../context/game-context.js';
import LoadingSpinner from '../UI/LoadingSpinner';


const SidebarDetails = () => {

    const {list, urlLoading, selectedTournaHandler} = useContext(GameContext)

    return(
        <ul>
        
        {list?.length!==0 ? (
            !urlLoading ? 
                list.map( tourna => {
                return (
                    <li key={tourna.id} id={tourna.id} className={classes.listItems} name={tourna.attributes.name} url={tourna.attributes.url} onClick={selectedTournaHandler}>
                        <HiOutlineHashtag/>
                        <span className={classes.channelName}>
                            {tourna.attributes.name}
                        </span>
                    </li>
                )
                })  : <LoadingSpinner/>)
         : <li>No tournaments available</li>}
    </ul>   
    )
}

export default SidebarDetails;