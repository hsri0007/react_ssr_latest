import { Button, makeStyles } from "@material-ui/core";
import "./EditAction.css";
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
const config = require("../config.js");
const url = config.url;
// import { Editor, EditorState } from "react-draft-wysiwyg";
const mergeJSON = require("merge-json");

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
});

const EditAction = (props) => {
  const token = authHeader();
   const classesAlert = useStylesAlert();
  const [openAlert, setOpenAlert] = useState(false);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  // const [courseName,setCourseName] = useState(props.data[0].course);
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

  console.log("date:  " + props);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const funct = () => {
    formik.handleSubmit();
    handleClose();
  };
  console.log("EditActions" + props.data.demo_date);
  console.log("data" + props.data.id);

  const [description, setDescription] = useState("");

  const classes2 = useStyles2();

  const [details, setDetails] = useState({});

  console.log(description.description);
  // setTimeout(() => {

  // }, 3000);
  // useEffect(async() => {
  //     const result = await fetch(`http://localhost:8000/admin/course/${props.id}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       });
  //       const d = await result.json();
  //       setDetails(d.data);
  //     //   console.log(details)
  //     //   history.push({ pathname: "/courses/editAction",state: {data: d.data}})
  //   },[])
    // console.log(props.data.demo_date);
    const temp=props.data.demo_date.slice(0,10)+props.data.demo_date.slice(10,22);
    console.log(temp);
    const [demo_date, setDate] = useState(temp);

  const handleDate = (e) => {
    console.log(e.target.value);
    const temp=e.target.value.slice(0,10)+" "+e.target.value.slice(11)
    setDate(temp);
    console.log(demo_date.slice(0,10)+" "+demo_date.slice(11));
    // console.log(typeof(moment((new Date(demo_date).toISOString()))))
    // setDate(typeof((new Date(demo_date).toISOString())))
  }
  const formik = useFormik({
    initialValues: {
      batch_type: `${props.data.batch_type}`,
    },
    
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2))
      const valueObj = JSON.stringify(values, null, 2);
      const mergedObject = {
        ...JSON.parse(valueObj),
        demo_date
      };

      console.log(mergedObject);
      const result = await fetch(
        `${url}/admin/coursedate/edit/${props.data.id}`,
        {
          method: "PUT",
          body: JSON.stringify(mergedObject),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": token["x-access-token"],
          },
        }
      );
      const data = await result.json();
      console.log("Course dates update: " + data.cu_data);
    handleClickAlert();

      // alert("Data updated successfully");
    },
  });
  console.log(details);

  return (
    <div className="content">
      <div className="upper">
        <h2 className="heading">Update CourseDates</h2>
        <Button
          variant="contained"
          color="secondary"
          className={classes2.button}
          startIcon={<AddIcon />}
          onClick={() => history.push("/courseDates/courseDates")}
        >
          View CourseDates
        </Button>
      </div>
      <div className="form">
       <div className={classesAlert.root}>
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={openAlert} autoHideDuration={1500} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success">
              Updated successfully!
            </Alert>
          </Snackbar>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="inner-element">
            <TextField
                id="datetime-local"
                label="Date"
                type="datetime-local"
                defaultValue={demo_date}
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
              error={formik.touched.batch_type && Boolean(formik.errors.batch_type)}
              helperText={formik.touched.batch_type && formik.errors.batch_type}
            />
          </div>

    

          <div className="inner-element">
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
              {console.log(description.description)}
            </div>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Update CourseDates
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Date:</strong> {demo_date}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Batch Type:</strong> {formik.values.batch_type}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAction;
