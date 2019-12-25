import React from 'react';
import wrapper from '../../hoc/hoc';
const Users =({data,name,email})=>
(<div className='container'>
<h1>{data.name}</h1>
<h2>{data.email}</h2>
Posts:
{data.map(post => (
  <div className='post' key={post.id}>
    <h1>{post.name}</h1>
    <p> {post.email} </p>
  </div>
))}
</div>
);



export default wrapper(Users);