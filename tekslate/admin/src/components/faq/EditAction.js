import { Button, makeStyles } from "@material-ui/core";
import "./EditAction.css";
import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useFormik } from "formik";
import * as yup from "yup";


import FormsUI from "./FormsUI";
import { Editor } from "@tinymce/tinymce-react";

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

import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const config = require("../config.js");

const useStylesStatus = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

const url = config.url;
// import { Editor, EditorState } from "react-draft-wysiwyg";
const mergeJSON = require("merge-json");
const striptags = require("striptags");

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
  faq_title: yup.string("").required("required"),
});

const EditAction = (props) => {
  const token = authHeader();

  const [validated, setValidated] = useState(false);

  const classesStatus = useStylesStatus();
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
};
  var s= props.data.f_status===1 ? "active" : "inActive";
  const [status, setStatus] = React.useState(s);

  // const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [data, setData] = useState({});
  const [select, setSelect] = useState(props.data.course_id);
  const [openAutoComplete, setOpenAutoComplete] = React.useState(false);
  const [filter, setFilter] = useState("");

  const classesAlert = useStylesAlert();
  const [openAlert, setOpenAlert] = useState(false);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const [courseName,setCourseName] = useState(props.data.course);
  const { vertical, horizontal } = state;

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    history.push("/faq/faq");
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(`${url}/admin/courses`, {
        headers: authHeader(),
      });
      const data = await response.json();
      var temp = [];
      Object.entries(data.data).map((item) =>
        temp.push({
          id: item[1].id,
          course: item[1].course,
        })
      );
      setCourses(temp);
      console.log(courses);
    }
    fetchMyAPI();
  }, []);

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
  console.log("EditActions" + props.data);
  console.log("data" + props.data.id);
  const handleDescription = (e) => {
    setDescription({
      ...faq_description,
      faq_description: e.target.getContent(),
    });
    // console.log(e.target.getContent())
    // console.log(description)
  };

  const [faq_description, setDescription] = useState(props.data.faq_description);

  const classes2 = useStyles2();

  const [details, setDetails] = useState({});

  // console.log(description.description);
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
  console.log("PROPS: " + props.data.title);
  const formik = useFormik({
    initialValues: {
      faq_title: `${props.data.faq_title}`,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2))
      const valueObj = JSON.stringify(values, null, 2);
      const descObj = JSON.stringify(faq_description);
      const mergedObject = {
        ...JSON.parse(valueObj),
        faq_description
      };
      mergedObject["id"] = select;
      mergedObject["status"]=status;
      console.log(mergedObject);
      console.log(JSON.stringify(values, null, 2));
      console.log(
        mergeJSON.merge(JSON.stringify(values, null, 2), faq_description)
      );
      const result = await fetch(`${url}/admin/faq/edit/${props.data.id}`, {
        method: "PUT",
        body: JSON.stringify(mergedObject),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token["x-access-token"],
        },
      });
      const data = await result.json();
      if (data.success === true) {
        setValidated(true);
      }
      console.log(data);
      handleClickAlert();

      // alert("Data updated successfully");
    },
  });
  console.log(details);

  return (
    <div className="content">
      <div className="upper">
        <h2 className="heading">Update Faq</h2>
        <Button
          variant="contained"
          color="secondary"
          className={classes2.button}
          startIcon={<AddIcon />}
          onClick={() => history.push("/faq/faq")}
        >
          View Faq
        </Button>
      </div>
      <div className="form">
      {/* <div className={classesAlert.root}>
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={openAlert} autoHideDuration={1500} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success">
              Updated successfully!
            </Alert>
          </Snackbar>
        </div> */}
         {validated ? (
          <div className={classesAlert.root}>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={openAlert}
              autoHideDuration={1500}
              onClose={handleCloseAlert}
            >
              <Alert onClose={handleCloseAlert} severity="success">
                Updated successfully!
              </Alert>
            </Snackbar>
          </div>
        ) : (
          <div>
            <div className={classesAlert.root}>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={openAlert}
                autoHideDuration={1500}
                onClose={handleCloseAlert}
              >
                <Alert severity="error">Failed!</Alert>
              </Snackbar>
            </div>
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
           <Autocomplete
              id="combo-box-demo"
              // name="course"
              options={courses}
              getOptionLabel={(option) => option.course || ""}
              // value={props.data[0].course}
              value={courses.find(
                (v) => v.title === props.data.course || {}
              )}
              defaultValue={props.data}
              // defaultValue={props.data[0].course}
              onChange={(event, value) => {
                if (value) {
                  setSelect(value.id);
                  setCourseName(value.course);
                }
              }}
              style={{ width: "98%", marginLeft: "15px"}}
              renderInput={(params) => (
                <TextField
                  style={{ backgroundColor: "#fffff9" }}
                  {...params}
                  label="Course*"
                  variant="outlined"
                />
              )}
            />
          <div className="inner-element">
            <FormsUI
              id="faq_title"
              name="faq_title"
              label="title"
              type="text"
              value={formik.values.faq_title}
              onChange={formik.handleChange}
              error={
                formik.touched.faq_title && Boolean(formik.errors.faq_title)
              }
              helperText={formik.touched.faq_title && formik.errors.faq_title}
            />
          </div>

          <div className="inner-element">
            {/* <textarea id="myEditor" value={description} name="description" onChange={(e) => handleDescription(e)}>
            <input type="submit" value="Save" />
            </textarea> */}
            <h4 style={{ color: "#686868" }}>Description*</h4>

            {/* <Editor
              initialValue={props.data.faq_description}
              init={{
                plugins: "link image code",
                toolbar:
                  "undo redo | bold italic| alignleft aligncenter alignright | code",
                  height: "450px"
              }}
              onChange={handleDescription}
            /> */}

              <Editor
              //    initialValue={state}
              apiKey="828t63t4odgpzely6os85k180zni7mbrklntzg2lt7vehtgj"
              value={faq_description}
              onEditorChange={(newValue, editor) => {
                // setValue(newValue);
                setDescription(newValue);
              }}
              init={{
                selector: "textarea#full-featured",
                automatic_uploads: true,
                fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",
                menubar: "file edit view insert format tools table tc help",
                 height: "550px",

                plugins: [
                  "youtube",
                  "advlist autolink lists link unlink image charmap print preview anchor",
                  "searchreplace visualblocks code",
                  "insertdatetime media table paste imagetools wordcount",
                  "image code",
                  "fullscreen",
                  "codesample",
                  "toc",
                ],
                toolbar:
                  "youtube| fullscreen |codesample | toc | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons |   preview save print | insertfile image media pageembed template link unlink anchor codesample | a11ycheck ltr rtl | showcomments addcomment",
                  
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                file_picker_types: "image",

                menu: {
                  tc: {
                    title: "TinyComments",
                    items: "addcomment showcomments deleteallconversations",
                  },
                },
              }}
            />
          </div>
          <div className="inner-element">
              <FormControl variant="outlined" className={classesStatus.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={status}
                  fullWidth
                  onChange={handleChangeStatus}
                  label="Status"
                  style={{
                  width: "100%",
                  height: "90%",
                  backgroundColor: "#fcfcfc",
                }}

                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inActive">In Active</MenuItem>
                </Select>
              </FormControl>
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
              {/* {console.log(description.description)} */}
            </div>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Update Faq
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Course:</strong> {courseName}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Title:</strong> {formik.values.faq_title}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Description:</strong>{" "}
                  {striptags(faq_description)}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Status:</strong> {status==="active"? "Active":"In Active"}
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
