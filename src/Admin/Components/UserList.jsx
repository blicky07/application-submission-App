// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:5000/users'); 
            const userData = await response.json();
            setUsers(userData);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
          }
        };
    
        fetchUsers();
      }, []);
    
      return (
        <div>
          <h2>User Management</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Citizenship</th>
                  <th>Academic Qualification</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.citizenship}</td>
                    <td>{user.academicQualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      );
};
 
export default UserList;
