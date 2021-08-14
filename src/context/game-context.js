import {createContext} from 'react';

const GameContext = createContext({
    game: {selected: ''},
    tournaments: [],
});

export default GameContext;

