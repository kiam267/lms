import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../context/auth';
import { Navigate, useNavigate } from 'react-router-dom';

function Admin() {
  const [users, getUsers] = useState([]);
  const { isLoggedIn, token, LogoutUser } = useAuth();
  const navigation = useNavigate();

  const deleteUsers = user => {
    axios
      .delete(`http://localhost:8080/api/admin/delete`, {
        params: { id: user },
      })
      .then(res => {navigation('/register'), LogoutUser() })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/admin/users`, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => getUsers(res.data.users))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <>
          {users.map((user, index) => (
            <div key={index}>
              <div>{user.email}</div>
              <button onClick={() => deleteUsers(user._id)}>Delete</button>
            </div>
          ))}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Admin;
