import { Button, makeStyles } from "@material-ui/core";
import "./EditAction.css";
import React, { useState } from "react";
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
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// import { Editor, EditorState } from "react-draft-wysiwyg";
const mergeJSON = require("merge-json");
const striptags = require("striptags");
const config = require("../config.js");
const url = config.url;

const useStylesStatus = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStylesFile = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const useStylesBuffer = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

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
  courseName: yup.string("").required("required"),
  duration: yup.number().required("required"),
  labSessions: yup.string("").required("required"),
  enrolled: yup.string("").required("required"),
  urlTitle: yup.string("").required("required"),
  pageMetaTitle: yup.string("").required("required"),
  metaDescription: yup.string("").required("required"),
  rating: yup.number().required("required"),
});

const EditAction = (props) => {
  const [file, setFile] = useState("");

  const classesFile = useStylesFile();
  const classesBuffer = useStylesBuffer();

  console.log(props.data);
  const token = authHeader();

  const [validated, setValidated] = useState(false);

  const classesStatus = useStylesStatus();
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  var s = props.data.status === 1 ? "active" : "inActive";
  const [status, setStatus] = React.useState(s);

  const classesAlert = useStylesAlert();
  const [openAlert, setOpenAlert] = useState(false);
  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "center",
  });
  // const [courseName,setCourseName] = useState(props.data[0].course);
  const { vertical, horizontal } = state;

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    history.push("/courses/course");
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [uploaded, setUploaded] = useState(true);
  const [imname, setImname] = useState("");

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
    setDescription({ ...description, description: e.target.getContent() });
    // console.log(e.target.getContent())
    console.log(description);
  };
  const [imurl, setImurl] = useState("");
  const changeImage = async (e) => {
    setUploaded(false);

    console.log("In change Img");
    const f = e.target.files[0];
    setFile(e.target.files[0]);
    console.log(file);
    console.log(f);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    const result = await fetch(`${url}/admin/courses/upload-image`, {
      method: "POST",
      body: formData,
      headers: {
        "x-access-token": token["x-access-token"],
      },
    });
    const data = await result.json();
    console.log(data);

    if (data.success === true) {
      setImurl(data.location);
      setImname(data.image);
      setUploaded(true);
      console.log(imurl);
      console.log(data.location);
    } else {
      setImname(data.message);
      setUploaded(true);
      console.log(data.error);
    }
  };

  const [description, setDescription] = useState(props.data.description);

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
  const formik = useFormik({
    initialValues: {
      courseName: `${props.data.course}`,
      duration: `${props.data.duration}`,
      labSessions: `${props.data.lab_sessions}`,
      enrolled: `${props.data.enrolled}`,
      urlTitle: `${props.data.url_title}`,
      pageMetaTitle: `${props.data.meta_title}`,
      metaDescription: `${props.data.meta_desc}`,
      rating: `${props.data.rating}`,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2))
      const valueObj = JSON.stringify(values, null, 2);
      const descObj = JSON.stringify(description);
      const mergedObject = {
        ...JSON.parse(valueObj),
        description,
      };
      mergedObject["status"] = status;
      mergedObject["image"] = imurl;
      console.log(mergedObject);
      console.log(JSON.stringify(values, null, 2));
      console.log(
        mergeJSON.merge(JSON.stringify(values, null, 2), description)
      );
      const result = await fetch(`${url}/admin/courses/edit/${props.data.id}`, {
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
      handleClickAlert();
      console.log(data);

      // alert("Data updated successfully");
    },
  });
  console.log(details);

  return (
    <div className="content">
      <div className="upper">
        <h2 className="heading">Update Course</h2>
        <Button
          variant="contained"
          color="secondary"
          className={classes2.button}
          startIcon={<AddIcon />}
          onClick={() => history.push("/courses/course")}
        >
          View Course
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
          <div className="inner-element">
            <FormsUI
              id="courseName"
              name="courseName"
              label="Course Name"
              type="text"
              value={formik.values.courseName}
              onChange={formik.handleChange}
              error={
                formik.touched.courseName && Boolean(formik.errors.courseName)
              }
              helperText={formik.touched.courseName && formik.errors.courseName}
            />
          </div>
          <div className="inner-element">
            <FormsUI
              id="duration"
              name="duration"
              label="Duration"
              type="text"
              value={formik.values.duration}
              onChange={formik.handleChange}
              error={formik.touched.duration && Boolean(formik.errors.duration)}
              helperText={formik.touched.duration && formik.errors.duration}
            />
          </div>

          <div className="inner-element">
            <FormsUI
              id="labSessions"
              name="labSessions"
              label="Lab Sessions"
              type="text"
              value={formik.values.labSessions}
              onChange={formik.handleChange}
              error={
                formik.touched.labSessions && Boolean(formik.errors.labSessions)
              }
              helperText={
                formik.touched.labSessions && formik.errors.labSessions
              }
            />
          </div>
          <div className="inner-element">
            <h4 style={{ color: "#686868" }}>Description*</h4>

            {/* <textarea id="myEditor" value={description} name="description" onChange={(e) => handleDescription(e)}>
            <input type="submit" value="Save" />
            </textarea> */}
            {/* <Editor
              initialValue={props.data.description}
              init={{
                plugins: "link image code",
                toolbar:
                  "undo redo | bold italic| alignleft aligncenter alignright | code",
                  height: "350px"
              }}
              onChange={handleDescription}
            /> */}
            <Editor
              //    initialValue={state}
              apiKey="828t63t4odgpzely6os85k180zni7mbrklntzg2lt7vehtgj"
              value={description}
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
          <div className={classesFile.root} className="inner-element">
            <input
              accept="image/*"
              className={classesFile.input}
              id="contained-button-file"
              multiple
              type="file"
              // onChange={(event) => setFile(event.target.files[0])}
              onChange={(e) => changeImage(e)}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                style={{
                  backgroundColor: "#21b6ae",
                }}
              >
                Upload
              </Button>
            </label>
            <input
              accept="image/*"
              className={classesFile.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              ></IconButton>
            </label>
            {!uploaded ? (
              <div className={classesBuffer.root}>
                {/* <CircularProgress /> */}
                <CircularProgress color="secondary" />
              </div>
            ) : (
              <div>{imname}</div>
            )}
          </div>
          <div className="inner-element">
            <FormsUI
              id="enrolled"
              name="enrolled"
              label="Enrolled"
              type="text"
              value={formik.values.enrolled}
              onChange={formik.handleChange}
              error={formik.touched.enrolled && Boolean(formik.errors.enrolled)}
              helperText={formik.touched.enrolled && formik.errors.enrolled}
            />
          </div>
          <div className="inner-element">
            <FormsUI
              id="urlTitle"
              name="urlTitle"
              label="URL Title"
              type="text"
              value={formik.values.urlTitle}
              onChange={formik.handleChange}
              error={formik.touched.urlTitle && Boolean(formik.errors.urlTitle)}
              helperText={formik.touched.urlTitle && formik.errors.urlTitle}
            />
          </div>

          <div className="inner-element">
            <FormsUI
              id="pageMetaTitle"
              name="pageMetaTitle"
              label="Page Meta Title"
              type="text"
              value={formik.values.pageMetaTitle}
              onChange={formik.handleChange}
              error={
                formik.touched.pageMetaTitle &&
                Boolean(formik.errors.pageMetaTitle)
              }
              helperText={
                formik.touched.pageMetaTitle && formik.errors.pageMetaTitle
              }
            />
          </div>

          <div className="inner-element">
            <FormsUI
              id="metaDescription"
              name="metaDescription"
              label="Meta Description"
              type="text"
              value={formik.values.metaDescription}
              onChange={formik.handleChange}
              error={
                formik.touched.metaDescription &&
                Boolean(formik.errors.metaDescription)
              }
              helperText={
                formik.touched.metaDescription && formik.errors.metaDescription
              }
            />
          </div>

          <div className="inner-element">
            <FormsUI
              id="rating"
              name="rating"
              label="Rating"
              type="text"
              value={formik.values.rating}
              onChange={formik.handleChange}
              error={formik.touched.rating && Boolean(formik.errors.rating)}
              helperText={formik.touched.rating && formik.errors.rating}
            />
          </div>
          <div className="inner-element">
            <FormControl
              variant="outlined"
              className={classesStatus.formControl}
            >
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
              {console.log(description.description)}
            </div>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Update Course
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Course:</strong> {formik.values.courseName}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Duration:</strong> {formik.values.duration}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Lab Sessions:</strong> {formik.values.labSessions}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Description:</strong> {striptags(description)}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Enrolled:</strong> {formik.values.enrolled}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong> URL Title:</strong> {formik.values.urlTitle}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Page Meta Title:</strong>{" "}
                  {formik.values.pageMetaTitle}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Meta Description:</strong>{" "}
                  {formik.values.metaDescription}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Rating:</strong> {formik.values.rating}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Status:</strong>{" "}
                  {status === "active" ? "Active" : "In Active"}
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
