import classes from './Success.module.css';
import {IoIosCheckboxOutline} from 'react-icons/io';

const Success = ({message}) => {
    return <p className={classes.success}>
        <IoIosCheckboxOutline style={{color: '#50C878', marginRight: '.5rem'}} size={20}/>
        {message}
        </p>
}

export default Success;