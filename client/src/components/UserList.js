const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "left",
      }}
    >
      <thead>
        <tr style={{ borderBottom: "2px solid #ddd" }}>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody style={{ marginTop: "1rem" }}>
        {users.map((user) => (
          <tr key={user._id} style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "1rem" }}>{user.name}</td>
            <td style={{ padding: "1rem" }}>{user.email}</td>
            <td style={{ padding: "1rem" }}>{user.age}</td>
            <td>
              <button
                onClick={() => editUser(user)}
                style={{ marginRight: "10px",
                backgroundColor: "#b3d9ff",
                padding: "0.5rem",
                border: "0px",
                borderRadius: "8px",
                color: "#000",
                width: "80px",
                height: "35px"
                 }}
              >
                Edit
              </button>
              <button onClick={() => deleteUser(user._id)} style={{
                backgroundColor: "#ff3333",
                padding: "0.5rem",
                border: "0px",
                borderRadius: "8px",
                color: "#fff",
                width: "80px",
                height: "35px"
              }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
