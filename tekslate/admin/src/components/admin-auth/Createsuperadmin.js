import React, { useState } from "react";
import axios from "axios";
const config = require("../config.js");
const url = config.url;

// axios.defaults.withCredentials = true;
const Createsuperadmin = () => {
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
    e.preventDefault();
    const data = await axios.post(`${url}/admin/auth/createsuperadmin`, {
      name: name,
      email: email,
      password: password,
      author: author,
    });
    console.log(data);
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
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

export default Createsuperadmin;
