import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: false,
        error: action.error,
      };
    default:
      throw new Error(`Unhandeld action type:${action.type}`);
  }
}

function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' });

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/',
      );
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, error, data: users } = state;
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error ocurred</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
//   const fetchUsers = async () => {
//     try {
//       setUsers(null);
//       setError(null);
//       setLoading(true);
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users/',
//       );
//       setUsers(response.data);
//     } catch (e) {
//       setError(e);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   if (loading) return <div>로딩중...</div>;
//   if (error) return <div>Error ocurred</div>;
//   if (!users) return null;

//   return (
//     <>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.username} ({user.name})
//           </li>
//         ))}
//       </ul>
//       <button onClick={fetchUsers}>다시 불러오기</button>
//     </>
//   );
// }
// export default Users;
