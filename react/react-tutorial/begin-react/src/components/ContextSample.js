import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

function Child(){
    const text = useContext(MyContext);
    return <div> 안녕하세요? {text}</div>
}

function Parent({ text }){
    return <Child text={text} />
}

function GrandParent({ text }){
    return <Parent text={text} />
}

function ContextSample({ text }){

    const [value, setValue] = useState(true);

    return (
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent />
            <button onClick={()=> setValue(!value)}>CLICK ME!</button>
        </MyContext.Provider>
    
    )
}

export default ContextSample;

//ContextAPI를 사용하면 깊은 곳에 있는 컴포넌트에게 값을 전달할 때 쉽게 전달할 수 있다.
//Props를 사용하면 어러개의 컴포넌트에서 이어져야하지만 ContextAPI의 Provider로 전달하게 되면 전역설정되어 손쉽게 전달한다.