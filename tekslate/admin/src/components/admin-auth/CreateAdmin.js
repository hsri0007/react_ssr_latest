import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./CreateAdmin.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your password"),
  // .min(8, "Password should be of minimum 8 characters length")
  // .required("Password is required"),
  author: yup.string("author name").required("author name is required"),
});
const config = require("../config.js");
const url = config.url;

function CreateAdmin() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      author: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("In on Submit");
      await axios
        .post(
          `${url}/admin/auth/createadmin`,
          {
            name: values.name,
            email: values.email,
            password: values.password,
            author: values.author,
          },
          {
            headers: {
              type: user.type,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            // localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data);
            history.push("/courses/course");
          } else {
            console.log("In here");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <div className="outer">
      <div className="login">
        <div className="headingAdmin">
          <h1>Create Admin</h1>
        </div>
        <form onSubmit={formik.handleSubmit} className="forms">
          <div className="field">
            <TextField
              id="name"
              variant="outlined"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
          <div className="field">
            <TextField
              id="email"
              variant="outlined"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="field">
            <TextField
              id="password"
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="field">
            <TextField
              id="author"
              variant="outlined"
              name="author"
              label="Author name"
              value={formik.values.author}
              onChange={formik.handleChange}
              error={formik.touched.author && Boolean(formik.errors.author)}
              helperText={formik.touched.author && formik.errors.author}
            />
          </div>
          <div className="button">
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAdmin;
