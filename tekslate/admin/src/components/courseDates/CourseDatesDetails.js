import { Button, makeStyles } from "@material-ui/core";
import "./CourseDatesDetails.css";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import {  useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import FormsUI from "./FormsUI";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";
import authHeader from "../../services/auth-header";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// import { Editor, EditorState } from "react-draft-wysiwyg";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStylesAlert = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const config = require("../config.js");
const url = config.url;
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={classes.root}
      {...other}
      style={{ width: "500px" }}
    >
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    width: "100%",
    padding: "12px",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(6),
  },
}))(MuiDialogActions);

const useStyles2 = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "#21c070",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}));



const validationSchema = yup.object({
  batch_type: yup.string("").required("required"),
  // flag: yup.string("").required("required"),
});

const CourseDatesDetails = () => {
  const token = authHeader();

  const classesAlert = useStylesAlert();
  const [openAlert, setOpenAlert] = useState(false);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const [courseName,setCourseName] = useState("");
  const { vertical, horizontal } = state;

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
     history.push("/courseDates/courseDates");
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 


  const classes2 = useStyles2();



  const [demo_date, setDate] = useState("2017-05-24T10:30");
  const formik = useFormik({
    initialValues: {
      batch_type: "",
      // flag: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2))
      const valueObj = JSON.stringify(values, null, 2);
      // const descObj = JSON.stringify(date);
      const mergedObject = {
        ...JSON.parse(valueObj),
        demo_date
      };
      console.log(mergedObject);
      const result = await fetch(`${url}/admin/coursedate/add`, {
        method: "POST",
        body: JSON.stringify(mergedObject),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token["x-access-token"],
        },
      });
      const data = await result.json();
      handleClickAlert();
      console.log(data);
    },
  });
  const funct = () => {
    formik.handleSubmit();
    handleClose();
  };
  const handleDate = (e) => {
    const temp=e.target.value.slice(0,10)+" "+e.target.value.slice(11)
    setDate(temp);
    console.log(demo_date.slice(0,10)+" "+demo_date.slice(11));
    // console.log(typeof(moment((new Date(demo_date).toISOString()))))
    // setDate(typeof((new Date(demo_date).toISOString())))
  }
  // console.log(new Date(date).toISOString())
  // console.log(defaultValue);
  return (
    <div className="content">
      <div className="upper">
        <h2 className="heading">Date</h2>
        <Button
          variant="contained"
          color="secondary"
          className={classes2.button}
          startIcon={<AddIcon />}
          onClick={() =>  history.push("/courseDates/courseDates")}
        >
          View Course Dates
        </Button>
      </div>
      <div className="form">
        <div>
        <div className={classesAlert.root}>
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={openAlert} autoHideDuration={1500} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success">
              Added successfully!
            </Alert>
          </Snackbar>
        </div>
          <form onSubmit={formik.handleSubmit}>
            {/* <div className="inner-element">
              <FormsUI
                id="demo_date"
                name="demo_date"
                label="Demo Date"
                type="text"
                value={formik.values.demo_date}
                onChange={formik.handleChange}
                error={formik.touched.demo_date && Boolean(formik.errors.demo_date)}
                helperText={formik.touched.demo_date && formik.errors.demo_date}
              />
            </div> */}
            <div className="inner-element">
              <TextField
                id="datetime-local"
                label="Date"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                onChange={handleDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="inner-element">
              <FormsUI
                id="batch_type"
                name="batch_type"
                label="Batch Type"
                type="text"
                value={formik.values.batch_type}
                onChange={formik.handleChange}
                error={
                  formik.touched.batch_type && Boolean(formik.errors.batch_type)
                }
                helperText={
                  formik.touched.batch_type && formik.errors.batch_type
                }
              />
            </div>
            {/* <div className="inner-element">
              <FormsUI
                id="course"
                name="course"
                label="Title"
                type="text"
                value={formik.values.course}
                onChange={formik.handleChange}
                error={formik.touched.course && Boolean(formik.errors.course)}
                helperText={formik.touched.course && formik.errors.course}
              />
            </div> */}

            <div className="inner-element">
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={handleClickOpen}
              >
                Submit
              </Button>
              {/* <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Submit
              </Button> */}
              {/* {console.log("description: "+description)} */}
            </div>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Add Course Dates
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Date:</strong> {demo_date}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Batch Type</strong> {formik.values.batch_type}
                </Typography>
              
              </DialogContent>
              <DialogActions>
                {/* <Button autoFocus onClick={handleClose} color="primary">
                    Save changes
                  </Button> */}
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={funct}
                >
                  Submit
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={handleClose}
                >
                  Edit
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseDatesDetails;
