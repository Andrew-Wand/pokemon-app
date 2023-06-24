const pokemonAppReducer = (state, action) => {
switch (action.type) {
    case 'GET_POKEMON':
        return {
            ...state,
            pokemonArray: action.payload
        }
        
    

    default:
       return state;
}

}

export default pokemonAppReducer;