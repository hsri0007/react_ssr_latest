import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import "./Login.css";
import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your password"),
  // .min(8, "Password should be of minimum 8 characters length")
  // .required("Password is required"),
});

function LoginV1() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));

      // e.preventDefault();
      console.log("In on Submit");
      await axios
        .post("http://localhost:8000/admin/auth/login", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log("In then: " + response.data);
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
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
        <div className="headingLogin">
          <h2>Login</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="forms">
          <div className="field">
            <TextField
              id="outlined-basic"
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
              id="outlined-basic"
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

export default LoginV1;
