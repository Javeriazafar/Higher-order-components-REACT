import React from 'react';

import wrapper from '../../hoc/hoc';
const UserList=({data})=>
(<div className='container user-list'>
    <h1> Users List </h1>
    {data.map(user => (
       
      <div className='post' key={user.id}>
        <h1> {user.title} </h1>
        <h2> {user.body} </h2>
      </div>
    ))}
    { console.log(data)}
  </div>
    
)
export default wrapper(UserList);