import React, { useReducer } from 'react';

function reducer(state, action){
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:
            throw new Error('Unhandeld action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);
    //const [number, setNumber] = useState(0); //배열 비구조화 할당

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

//useState
// 상태의 기본값을 파라미터로 넣어 호출
// -> 배열 반환
// 첫번째 원소: 현재 상태
// 두번째 원소: Setter함수