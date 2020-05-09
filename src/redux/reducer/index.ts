import {EnthusiasmAction } from '../actions'
import {StoreState} from '../types'
import {INCREMENT_ENTHUSIASM,DECREMENT_ENTHUSIASM } from '../actions'

const initState= {
    enthusiasmLevel:2,
    languageName:'typescript'
}


export default (state:StoreState = initState,action:EnthusiasmAction): StoreState =>{
    switch(action.type){
        case INCREMENT_ENTHUSIASM:
            console.log({...state,enthusiasmLevel:state.enthusiasmLevel + 1})
            return {...state,enthusiasmLevel:state.enthusiasmLevel + 1}
        case DECREMENT_ENTHUSIASM:
                console.log({...state,enthusiasmLevel:state.enthusiasmLevel - 1})
            return {...state,enthusiasmLevel:state.enthusiasmLevel - 1}
    }
    return state
}