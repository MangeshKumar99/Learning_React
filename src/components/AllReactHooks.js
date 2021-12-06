import React,{useState} from 'react'

function AllReactHooks() {
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState('initial text...')
    const increment=()=>{
        setCounter(counter+1)
    }
    const changeText=(event)=>{
        const newText=event.target.value
        console.log(newText)
        setText(newText)
    }
    return (
        <div>
            <h4>{counter}</h4>
            <button onClick={increment}>Increment</button>
            <h3>{text}</h3>
            <input type="text"  onChange={changeText}/>
        </div>
    )
}

export default AllReactHooks
