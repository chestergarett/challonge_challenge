import {useState, useContext} from 'react';
import GameContext from '../../context/game-context';
import {TextField, Button} from '@material-ui/core';
import CenteredModal from '../UI/Modals/CenteredModal';
import classes from './UpdateTournament.module.css';
import generateUID from '../../helpers/idGenerator';
import { editTournament } from '../utils/utils';
import Success from '../Success/Success';
import Errors from '../Errors/Errors';
import LoadingSpinner from '../UI/LoadingSpinner';

const UpdateTournament = (props) => {
    const {selectedURL,selectedTourna, urlCode} = useContext(GameContext);
    const [formData, setFormData] = useState({})
    const [errorDiv,setErrorDiv] = useState(null);
    const [successDiv, setSuccessDiv] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        editTournament(selectedURL,formData.name, `${generateUID()}_${urlCode}`, formData.starts_at, formData.description)
        .then(res=>{
            setSuccessDiv(true)
            setErrorDiv(null)
            setIsLoading(false)
            })
        .catch(err=>{
            if(err.response.status===404){
                setErrorDiv("404")
            }
            if(err.response.status===401){
                setErrorDiv("401")
            }
            if(err.response.status===406){
                setErrorDiv("406")
            }
            if(err.response.status===415){
                setErrorDiv("415")
            }
            if(err.response.status===422){
                setErrorDiv("422")
            }
            setSuccessDiv(false)
            setIsLoading(false)
        })
    }

    return(
        <CenteredModal onClose={props.onClose}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.header}>{selectedTourna}</div>
                    <input
                        id="name"
                        label="name"
                        type="text"
                        palceholder="name"
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, name: (e.target.value)})}
                    />
                    <input
                        id="starts_at"
                        label="Starts at"
                        type="datetime-local"
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, starts_at: (e.target.value)})}
                    />

                    <input
                        id="description"
                        label="Description"
                        placeholder="Describe Tournament here"
                        className={classes.items}
                        onChange = { (e) => setFormData({...formData, description: e.target.value})}
                    /> 

                    <Button variant="contained" 
                        style={{color: 'whitesmoke', backgroundColor:'#7289DA'}}
                        type="submit">Update Tournament</Button>
                    {successDiv && <Success message="Successfully updated tournament details."/>}
                    {errorDiv && <Errors error={errorDiv}/>}
                    {isLoading && <LoadingSpinner/>}
                </form> 
            </CenteredModal>
    )
}

export default UpdateTournament;
