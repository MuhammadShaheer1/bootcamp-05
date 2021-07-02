import React,{useContext} from 'react'
import counterContext from './CounterContext'

const Child1 = () => {
    let counterValue = useContext(counterContext)
    return (
        <div>
            <h1>This is the first Child made through createContext API</h1>
            <h3>The value of the Counter is {counterValue[0]}</h3>
            <button onClick={()=>counterValue[1](++counterValue[0])} className="btn1">INCREMENT CONTEXT</button>
            <button onClick={()=>counterValue[1](--counterValue[0])} className="btn2">DECREMENT CONTEXT</button>
            <button onClick={()=>counterValue[1](0)} className="btn3">RESET</button>
        </div>
    )
}

export default Child1