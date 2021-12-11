import { Button, makeStyles } from "@material-ui/core";
import "./BlogDetails.css";
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

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  blog_category: yup.string("").required("required"),
  meta_title: yup.string("").required("required"),
  url_title: yup.string("").required("required"),
  meta_desc: yup.string("").required("required"),
});

const BlogDetails = () => {
  const token = authHeader();

  const [validated, setValidated] = useState(false);

  const classesStatus = useStylesStatus();
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
};
  const [status, setStatus] = React.useState('');

   const classesAlert = useStylesAlert();
  const [openAlert, setOpenAlert] = useState(false);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  // const [courseName,setCourseName] = useState("");
  const { vertical, horizontal } = state;

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
     history.push("/blog/blog");
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

  const handleDescription = (e) => {
    setDescription({ ...description, description: e.target.getContent() });
    // console.log(e.target.getContent())
    // console.log(description);
  };

  const [description, setDescription] = useState("");

  const classes2 = useStyles2();

  const formik = useFormik({
    initialValues: {
      blog_category: "",
      meta_title: "",
      url_title: "",
      meta_desc: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      const valueObj = JSON.stringify(values, null, 2);
      const descObj = JSON.stringify(description);
      const mergedObject = {
        ...JSON.parse(valueObj),
        description
      };
      mergedObject["status"]=status;
      console.log(mergedObject);
      console.log(JSON.stringify(values, null, 2));
      console.log(
        mergeJSON.merge(JSON.stringify(values, null, 2), description)
      );
      const result = await fetch(`${url}/admin/blog/add`, {
        method: "POST",
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
    },
  });
  const funct = () => {
    formik.handleSubmit();
    handleClose();
  };

  return (
    <div className="content">
      <div className="upper">
        <h2 className="heading">Add Blog</h2>
        <Button
          variant="contained"
          color="secondary"
          className={classes2.button}
          startIcon={<AddIcon />}
          onClick={() => history.push("/blog/blog")}
        >
          View Blog
        </Button>
      </div>
      <div className="form">
        <div>
        {/* <div className={classesAlert.root}>
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={openAlert} autoHideDuration={1500} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success">
              Added successfully!
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
                Added successfully!
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
                id="blog_category"
                name="blog_category"
                label="Category Name"
                type="text"
                value={formik.values.blog_category}
                onChange={formik.handleChange}
                error={
                  formik.touched.blog_category &&
                  Boolean(formik.errors.blog_category)
                }
                helperText={
                  formik.touched.blog_category && formik.errors.blog_category
                }
              />
            </div>

            <div className="inner-element">
              {/* <textarea id="myEditor" value={description} name="description" onChange={(e) => handleDescription(e)}>
            <input type="submit" value="Save" />
            </textarea> */}
              <h4 style={{ color: "#686868" }}>Description*</h4>

              {/* <Editor
                initialValue=""
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
            <div className="inner-element">
              <FormsUI
                id="meta_title"
                name="meta_title"
                label="Meta Title"
                type="text"
                value={formik.values.meta_title}
                onChange={formik.handleChange}
                error={
                  formik.touched.meta_title && Boolean(formik.errors.meta_title)
                }
                helperText={
                  formik.touched.meta_title && formik.errors.meta_title
                }
              />
            </div>
            <div className="inner-element">
              <FormsUI
                id="url_title"
                name="url_title"
                label="URL Title"
                type="text"
                value={formik.values.url_title}
                onChange={formik.handleChange}
                error={
                  formik.touched.url_title && Boolean(formik.errors.url_title)
                }
                helperText={formik.touched.url_title && formik.errors.url_title}
              />
            </div>
            <div className="inner-element">
              <FormsUI
                id="meta_desc"
                name="meta_desc"
                label="Meta Description"
                type="text"
                value={formik.values.meta_desc}
                onChange={formik.handleChange}
                error={
                  formik.touched.meta_desc && Boolean(formik.errors.meta_desc)
                }
                helperText={formik.touched.meta_desc && formik.errors.meta_desc}
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
                Add Blog
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Category Name:</strong> {formik.values.categoryName}
                </Typography>

                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Description:</strong>{" "}
                  {striptags(description)}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Meta Title:</strong> {formik.values.meta_title}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>URL Title:</strong> {formik.values.url_title}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Meta Description:</strong> {formik.values.meta_desc}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
