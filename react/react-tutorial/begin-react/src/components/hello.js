import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: '이름없음'
    }
    render() {
        const { color, isSpecial, name} = this.props
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}



// function Hello({ color, name, isSpecial }) {
//     return (
//         <div style={{color: color}}>
//             { isSpecial && <b>*</b>}
//             안녕하세요 {name}
//         </div>
//     );
// }

// function hello1(props) {
//     return <div style={{color: props.color}}>안녕하세요{props.name}</div>
// }

// Hello.defaultProps = {
//     name: 'undefined'
// }

// // 비구조화 할당
// function hello2({ color, name }) {
//     return <div style={{ color }}>안녕하세요 {name}</div>
// }

export default Hello;