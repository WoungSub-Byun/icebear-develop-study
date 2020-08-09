import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0); //배열 비구조화 할당

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
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