import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, image } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("password", password);
    formDataToSend.append("image", image);

    try {
      const response = await fetch("http://localhost:3000/auth/api/register", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // Handle successful registration
      } else {
        // Handle registration error
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default App;
