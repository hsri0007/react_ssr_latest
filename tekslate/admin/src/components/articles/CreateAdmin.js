import React, { useState } from "react";
import axios from "axios";
const config = require("../config.js");
const url = config.url;
const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    author: "",
  });
  const { name, email, password, author } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const data = await axios.post(
      "http://localhost:8000/admin/auth/createadmin",
      {
        name: name,
        email: email,
        password: password,
        author: author,
      },
      {
        headers: {
          type: user.type,
        },
      }
    );
    await console.log(data);
  };

  return (
    <div className="register">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Set password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={author}
            onChange={(e) => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default CreateAdmin;
