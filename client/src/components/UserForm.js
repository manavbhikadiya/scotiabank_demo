import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, editingUser, updateUser, cancelEdit }) => {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser) setForm(editingUser);
    else setForm({ name: "", email: "", age: "" });
  }, [editingUser]);

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      tempErrors.email = "Email is not valid";
    if (!form.age) tempErrors.age = "Age is required";
    else if (form.age <= 0) tempErrors.age = "Age must be positive";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop if validation fails
    if (editingUser) updateUser(editingUser._id, form);
    else addUser(form);
    setForm({ name: "", email: "", age: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        justifyContent: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{ padding: "8px", width: "95%" }}
        />
        {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
      </div>
      <div style={{ flex: 1 }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ padding: "8px", width: "95%" }}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>
      <div style={{ width: "80px" }}>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          style={{ padding: "8px", width: "95%" }}
        />
        {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
      </div>
      <button type="submit"
      style={{
                backgroundColor: "#5cd65c",
                padding: "8px 15px", 
                marginLeft: "2rem",
                border: "0px",
                borderRadius: "8px",
                color: "#000",
                width: "80px",
                height: "35px"
              }}
      >
        {editingUser ? "Update" : "Add"}
      </button>
      {editingUser && (
        <button
          type="button"
          onClick={cancelEdit}
          style={{
                backgroundColor: "#ff3333",
                padding: "0.5rem",
                border: "0px",
                borderRadius: "8px",
                color: "#fff",
                width: "80px",
                height: "35px"
              }}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default UserForm;
