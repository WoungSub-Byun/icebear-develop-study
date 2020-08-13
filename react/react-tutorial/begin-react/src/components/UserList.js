import React, { useEffect, useContext } from 'react';
import { UserDispatch } from '../App';

const User = React.memo(function User({ user }) {
    const { id, username, email, active } = user;
    const dispatch = useContext(UserDispatch);

    useEffect(()=>{console.log('change')}, [user])

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: "pointer"
            }}
            onClick={()=>dispatch({
                type: 'TOGGLE_USER',
                id
            })}>
                {username}
            </b> 
            <span>({email})</span>
            <button onClick={()=> dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
        </div>
    
    );
});

function UserList({ users }) {
    return (
        <div>
            {
                users.map(
                    user => (
                    <User
                        key={user.id} 
                        user={user}
                    /> )
                )
            }
        </div>
    );
}

export default React.memo(UserList);

//useEffect([function], [depth]);

//depth값에 값을 넣는다면 넣은 값이 바뀔때 실행됨 
                //return은 값이 바뀔 때 실행 -> 즉 unMount일때 실행
                //useEffect안의 return의 나머지는 mount될때 실행
                //처음 실행될 때도 실행