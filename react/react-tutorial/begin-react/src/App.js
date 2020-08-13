import React, { useState, useRef, useMemo, useCallback, useReducer, createContext } from 'react';
import produce from 'immer';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';


function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}

function reducer(state, action){
  switch(action.type){
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.user.push(action.user);
      });
      // return {
      //   users: state.users.concat(action.user)
      // }
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id
      //     ? { ...user, active: !user.active }
      //     : user)
      // };
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      })  
    // return {
      //   users: state.users.filter(user => user.id !== action.id)
      // }
    default:
      throw new Error('Unhandeled Error');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;



  const count = useMemo(()=> countActiveUsers(users), [users]);
  return(
    <UserDispatch.Provider value={dispatch}>
      <CreateUser/>
      <UserList 
        users={users}
      />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
    
  )
}
export default App;



// const [inputs, setInputs ] = useState({
//   username: '',
//   email: ''
// });

// const { username, email } = inputs;

// const [users, setUsers] = useState();



// const onChange = useCallback(e => {
//   const { name, value } = e.target;
//   setInputs({
//     ...inputs,
//     [name]: value
//   });
// }, [inputs]);



// const nextId = useRef(4);

// const onCreate = useCallback(() => {
//   const user = {
//     id: nextId.current,
//     username,
//     email
//   };
//   setUsers(users => users.concat(user));
//   setInputs({
//     username:'',
//     email: ''
//   });
//   nextId.current += 1;
// }, [username, email]);

// const onRemove = useCallback(id => {
//   setUsers(users => users.filter(user => user.id !== id));
// },[]);

// const onToggle = useCallback((id) => {
//   setUsers(users => users.map(
//     user => user.id === id 
//     ? {...user, active: !user.active}
//     : user
//   ));
// }, [])

// const count = useMemo(()=>countActiveUsers(users), [users])