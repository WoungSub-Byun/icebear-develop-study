import React, { Component, useReducer } from 'react';

class Counter extends Component {
    //class형 컴포넌트에서 state는 객체 형태여야한다.
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            updateMe: {
                ToggleMe: false,
                dontChangeMe: 1,
            }
        };
    }
    // constructor(props) {
    //     super(props);
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    handleIncrease = () => {
        //this.setState는 ...(spread function)를 쓰지 않아도 update할 값만 명시해주면 명시한 값만 바뀌고 나머지 데이터들은 바뀌지 않는다
        this.setState({ 
            counter: this.state.counter+1
        });
    }

    handleDecrease = () => {
        this.setState({
            counter: this.state.counter-1
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값{this.state.fixed}</p>
            </div>
        );
    }
}


// function reducer(state, action){
//     switch(action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state -1;
//         default:
//             throw new Error('Unhandeld action');
//     }
// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);
//     //const [number, setNumber] = useState(0); //배열 비구조화 할당

//     const onIncrease = () => {
//         dispatch({
//             type: 'INCREMENT'
//         })
//     }
//     const onDecrease = () => {
//         dispatch({
//             type: 'DECREMENT'
//         })
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }

export default Counter;

//useState
// 상태의 기본값을 파라미터로 넣어 호출
// -> 배열 반환
// 첫번째 원소: 현재 상태
// 두번째 원소: Setter함수