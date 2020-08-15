import React, { useState } from 'react';
import './Users.scss';
import axios from 'axios';
import useAsync from './useAsync';
import User from './User';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/',
  );
  return response.data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, [], true);
  const [userId, setUserId] = useState(null);

  const { loading, error, data: users } = state;
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error ocurred</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li className="li" key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <User id={userId} />}
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
