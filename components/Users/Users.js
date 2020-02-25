import React from 'react';

const Users = props => {
  return (
    <div>
      <h1>
        I am user {props.name} and I am {props.age} years old
      </h1>
      <style jsx>
        {`
          h1 {
            color: pink;
          }
        `}
      </style>
    </div>
  );
};

export default Users;
