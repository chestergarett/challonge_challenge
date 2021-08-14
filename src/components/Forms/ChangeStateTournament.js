import {useState, useContext} from 'react';
import {changeTournament} from '../utils/utils.js'; 
import GameContext from '../../context/game-context';
import {Button} from '@material-ui/core';
import Select from 'react-select';
import classes from './ChangeStateTournament.module.css';
import CenteredModal from '../UI/Modals/CenteredModal';
import Errors from '../Errors/Errors';
import Success from '../Success/Success';
import LoadingSpinner from '../UI/LoadingSpinner.js';

const ChangeStateTournament = (props) => {

    const {selectedTourna,selectedURL} = useContext(GameContext)
    const [formData, setFormData] = useState({
        url: '',
        state: '',
    })
    const [selectedOption, setSelectedOption] = useState('');
    const [errorDiv,setErrorDiv] = useState(null);
    const [successDiv, setSuccessDiv] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const options = [
        {value:'process_checkin', label: 'process_checkin'},
        {value:'abort_checkin', label: 'abort_checkin'},
        {value:'start', label: 'start'},
        {value:'finalize', label: 'finalize'}, 
        {value:'reset', label: 'reset'},
        {value:'open_predictions', label: 'open_predictions'},
    ]

    const submitHandler = () => {
        setIsLoading(true)
        setFormData({...formData, url: selectedURL, state: selectedOption.value})
        
        changeTournament(selectedURL,selectedOption.value)
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

    const customStyles = {
        control: (base,state) => {return {...base, background: 'whitesmoke'}},
        menuPortal: base => { return {...base, zIndex: 9999, backgroundColor: "black"} },
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isFocused ? "#999999" : "whitesmoke",
            color: "#333333",
          };
        }
      };

    return (
        <CenteredModal onClose={props.onClose}>
            <form className={classes.form}>
                <div className={classes.header}> {selectedTourna}</div>
                <Select
                    styles={customStyles}
                    className={classes.items}
                    name="Tournament Type"
                    options={options}
                    onChange={setSelectedOption}
                    value={selectedOption}
                    isSearchable
                />
                <Button 
                    variant="contained" 
                    style={{color: 'whitesmoke', backgroundColor:'#7289DA'}} 
                    onClick={submitHandler}
                >
                    CHANGE STATE
                </Button>
                </form> 
                {successDiv && <Success message="Successfully change state."/>}
                {errorDiv && <Errors error={errorDiv}/>}
                {isLoading && <LoadingSpinner/>}
        </CenteredModal>
    )
}

export default ChangeStateTournament;