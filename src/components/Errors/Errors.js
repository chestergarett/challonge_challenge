import classes from './Error.module.css';
import {BiError} from 'react-icons/bi';

const Errors = ({error}) => {

    if (error==="404"){
        return <p className={classes.errors}><BiError style={{color: '#922724', marginRight: '.5rem'}} size={20}/>Invalid link/domain. Please try again.</p>
    }

    if (error==="401"){
        return <p className={classes.errors}><BiError style={{color: '#922724', marginRight: '.5rem'}} size={20}/>Unauthorized connection. Please try again.</p>
    }

    if (error==="406"){
        return <p className={classes.errors}><BiError style={{color: '#922724', marginRight: '.5rem'}} size={20}/>Parameters not acceptable. Please try again.</p>
    }

    if (error==="415"){
        return <p className={classes.errors}><BiError style={{color: '#922724', marginRight: '.5rem'}} size={20}/>Unsupported Media Type. Please try again.</p>
    }

    if (error==="422"){
        return <p className={classes.errors}>
            <BiError style={{color: '#922724', marginRight: '.5rem'}} size={20}/>Unprocessable Entity. Please try again.</p>
    }
}

export default Errors;