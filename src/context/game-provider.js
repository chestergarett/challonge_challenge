import {useState,useContext, useEffect} from 'react';
import GameContext from './game-context.js'
import {getTournaments, getTournament, getMatches} from '../components/utils/utils.js'; 

const GameProvider = (props) => {    
    const {game} = useContext(GameContext);
    const [selected, setSelected] = useState('Home');
    const [urlCode, setUrlCode] = useState('');
    const [urlLoading, setUrlLoading] = useState(false);
    const [selectedURL, setSelectedURL] = useState('');
    const [selectedTourna, setSelectedTourna] = useState('Home');
    const [tournaLoading, setTournaLoading] = useState(false);
    const [selectedTournaDetails, setSelectedTournaDetails] = useState({
            name: '',
            state: '',
            description: '',
            url: '',
            liveImageURL: '',
            startsAt: '',
            tournament_type: '',
            matches: [],
            participants: [],
    })

    let tournaments = []

    const [list, setList] = useState(tournaments)

    const selectedHandler = (e) => {
        setSelected(e.target.getAttribute('name'))
        e.target.getAttribute('name')==='Basketball' ? setUrlCode('bball') : setUrlCode('tableTennis')
    }

    const selectedTournaHandler = (e) => {
        setSelectedTourna(e.target.getAttribute('name'))
        setSelectedURL(e.target.getAttribute('url'))
    }

    
    let filteredTournaments

    //get all tournaments
    useEffect( () => {
        setUrlLoading(true)
        getTournaments()
        .then(res => {
                tournaments = new Array(...res?.data.data)
                if(selected==='Home'){
                    filteredTournaments = tournaments
                }else{
                    filteredTournaments = tournaments?.filter(tourna => tourna.id.includes(urlCode))
                }
                setList(filteredTournaments)
                setUrlLoading(false)
            }
        )
        .catch(error => {
            console.log(error)
            setUrlLoading(false)
        })
    },[urlCode])
        
    //get single tournament page
    useEffect ( () => {
        setTournaLoading(true)
        getTournament(selectedURL)
        .then(res => {
                setSelectedTournaDetails({
                    ...selectedTournaDetails,
                    name: res.data.data.attributes.name,
                    state: res.data.data.attributes.state,
                    description: res.data.data.attributes.description,
                    url: res.data.data.attributes.url,
                    liveImageURL: res.data.data.attributes.liveImageUrl,
                    startsAt: res.data.data.attributes.timestamps.startsAt,
                    tournament_type: res.data.data.attributes.tournamentType,
                    matches: res.data.data.relationships.matches,
                    participants: res.data.included,
                })
                setTournaLoading(false);
            }
        )
        .catch(error => {
            setTournaLoading(false);
            console.log(error)})
    },[selectedURL])        

    return <GameContext.Provider value={{
        game, 
        tournaments,
        filteredTournaments, 
        selected,
        urlCode,
        urlLoading,
        tournaLoading,
        selectedHandler,
        list,
        selectedTourna,
        selectedURL,
        selectedTournaDetails,
        selectedTournaHandler
        }}>
            {props.children}
        </GameContext.Provider>
}

export default GameProvider;