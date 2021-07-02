import React,{useReducer} from 'react'
import countReducer from './CountReducer'

const Child2 = () => {
    let [season, dispatch] = useReducer(countReducer, 'Summer')
    return (
        <div>
        <h1>This is the second Child made through useReducer</h1>
        <h3>The current season is {season}</h3>
        <button onClick = {()=> dispatch('SUMMER')} className="btn4">SUMMER</button>
        <button onClick = {()=> dispatch('WINTER')} className="btn5">WINTER</button>
        <button onClick = {()=> dispatch('AUTUMN')} className="btn6">AUTUMN</button>
        <button onClick = {()=> dispatch('SPRING')} className="btn7">SPRING</button>
        </div>
    )
}

export default Child2