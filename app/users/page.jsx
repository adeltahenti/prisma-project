'use client';

import { useState, useEffect } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/users');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setUsers(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>All Users</h1>
      {users.map((user) => (
        <h2 key={user.id}>{user.firstName}</h2>
      ))}
    </div>
  );
};

export default UsersPage;
