import React, {useState} from 'react'

const HookCounter = () => {
    const initCount = 0;
    const [count, setCount] = useState(initCount)
    const [name, setName] = useState({firstName: '', lastName:''})

    return (
        <div>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName :e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName :e.target.value})}/>
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
            </div>
    )
    // return (
    //     <div>
    //         <h3>Count: {count}</h3>
    //      <button  onClick={() => setCount(initCount)}>Reset</button>
    //      <button  onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    //      <button  onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    //     </div>
    // )
}

export default HookCounter
