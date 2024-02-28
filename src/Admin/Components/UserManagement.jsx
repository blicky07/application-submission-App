// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState([]);
    

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:5000/admin/users'); 
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

      
      const handleDeleteUser = async (userId) => {
        try {
          setLoading(true);
          await fetch(`http://localhost:5000/admin/users/${userId}`, {
            method: "DELETE",
          });
          setUsers(users.filter((user) => user.id !== userId));
        } catch (error) {
          console.error("Error deleting user:", error);
        } finally {
          setLoading(false);
        }
      }; 

      const handleUpdateUserRole = async (userId, newRole) => {
        try {
            setLoading(true);
            await fetch(`http://localhost:5000/admin/users/${userId}/role`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ role: newRole }),
            });
            // Optionally, update the state to reflect the new role
            const updatedUsers = users.map(user => {
                if (user.id === userId) {
                    return { ...user, role: newRole };
                }
                return user;
            });
            setUsers(updatedUsers);
        } catch (error) {
            console.error("Error updating user role:", error);
        } finally {
            setLoading(false);
        }
    };
        
      
      
      
    return (
      <div>
          <h2>User Management</h2>
          {loading ? (
              <p>Loading...</p>
          ) : (
              <table>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Citizenship</th>
                          <th>Academic Qualification</th>
                          <th>Role</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {users.map((user) => (
                          <tr key={user.id}>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.citizenship}</td>
                              <td>{user.academicQualification}</td>
                              <td>{user.role}</td>
                              <td>
                                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                  <select onChange={(e) => handleUpdateUserRole(user.id, e.target.value)}>
                                      <option value="user">User</option>
                                      <option value="admin">Admin</option>
                                      <option value="superadmin">Superadmin</option>
                                      <option value="approver">Approver</option>
                                  </select>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          )}
      </div>
  );
};
 
export default UserManagement;
