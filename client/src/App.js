import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://scotiabank-demo.onrender.com/users/getAll");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add user
  const addUser = async (user) => {
    try {
      const res = await axios.post("https://scotiabank-demo.onrender.com/users/create", user);
      setUsers([...users, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  // Update user
  const updateUser = async (id, updatedUser) => {
    try {
      const res = await axios.put(`https://scotiabank-demo.onrender.com/users/update/${id}`, updatedUser);
      setUsers(users.map((u) => (u._id === id ? res.data : u)));
      setEditingUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://scotiabank-demo.onrender.com/users/delete/${id}`);
      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>User Management</h1>
      <UserForm
        addUser={addUser}
        editingUser={editingUser}
        updateUser={updateUser}
        cancelEdit={() => setEditingUser(null)}
      />
      {
        !users.length? <p>No users in database. Please add one to see the list.</p> : <UserList
        users={users}
        editUser={(user) => setEditingUser(user)}
        deleteUser={deleteUser}
      />
      }
    </div>
  );
}

export default App;
