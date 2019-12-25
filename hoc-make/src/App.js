import React from 'react';

import './App.css';
import Users from './component/user/user';
import UserList from './component/user-list/user-list';

function App() {
  return (
    <div className="App">
     <Users datasource='https://jsonplaceholder.typicode.com/users'/>
     <UserList datasource='https://jsonplaceholder.typicode.com/posts'/>
    </div>
  );
}

export default App;
