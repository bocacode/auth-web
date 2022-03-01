import { useState, useEffect } from 'react';
import Signup from './scenes/Signup';
import Login from './scenes/Login';
import UserList from './scenes/UserList';

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();
  useEffect(() => {
    const myToken = localStorage.getItem('token')
    setToken(myToken)
  }, [])
  return (
    <section>
      {!token
          ? isUser
              ? <Login setToken={setToken} setIsUser={setIsUser} />
              : <Signup setToken={setToken} setIsUser={setIsUser} />
          : <UserList token={token} setToken={setToken} />
      }
    </section>
  );
}

export default App;
