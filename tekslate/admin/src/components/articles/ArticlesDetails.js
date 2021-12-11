import { Button, makeStyles } from "@material-ui/core";
import "./ArticlesDetails.css";
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

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Autocomplete from "@material-ui/lab/Autocomplete";


import { TextField } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

// import { Editor, EditorState } from "react-draft-wysiwyg";
const striptags = require("striptags");
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
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
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
  title: yup.string("").required("required"),
  blog_category: yup.string("").required("required"),
  blog_type: yup.string("").required("required"),
  url_title: yup.string("").required("required"),
  meta_title: yup.string("").required("required"),
  meta_desc: yup.string("").required("required"),
  rating: yup.number().required("required"),
  author: yup.string("").required("required"),
  author_desc: yup.string("").required("required"),
});

const ArticlesDetails = () => {
  const token = authHeader();

  const [validated, setValidated] = useState(false);

  const classesStatus = useStylesStatus();
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);  
  };
  const [status, setStatus] = React.useState('');

  // const [courses, setCourses] = useState([]);
  const classesAlert = useStylesAlert();
  const [openAlert, setOpenAlert] = useState(false);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });

  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [data, setData] = useState({});
  const [select, setSelect] = useState("");
  const [courseName,setCourseName] = useState("");
  
  const { vertical, horizontal } = state;

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    history.push("/articles/articles");
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(`${url}/admin/author`, {
        headers: authHeader(),
      });
      const data = await response.json();
      // setCourse(data.data);
      var temp = [];
      Object.entries(data.data).map((item) =>
        temp.push({
          id: item[1].id,
          course: item[1].author_name,
        })
      );
      setCourses(temp);
      console.log(courses);
      // setCourse(course);
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

  const handleDescription = (e) => {
    setDescription(e.target.getContent());
    // console.log(e.target.getContent())
    console.log(description);
  };

  const [description, setDescription] = useState("");

  const classes2 = useStyles2();

  const formik = useFormik({
    initialValues: {
      title: "",
      blog_category: "",
      blog_type: "",
      url_title: "",
      meta_title: "",
      meta_desc: "",
      rating: "",
      author: "",
      author_desc: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2))
      const valueObj = JSON.stringify(values, null, 2);
      const mergedObject = {
        ...JSON.parse(valueObj),
        // ...JSON.parse(descObj),
          description
      };
      mergedObject["status"]=status;
      console.log("Merged object"+mergedObject);
    
      mergedObject["author"]=courseName
      const result = await fetch(`${url}/admin/article/add`, {
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

      console.log(data);
      
    },
  });
  const funct = () => {
    console.log("CHECK");
    formik.handleSubmit();
    handleClose();
  };
  return (
    <div className="content">
      <div className="upper">
        <h2 className="heading">Add Articles</h2>
        <Button
          variant="contained"
          color="secondary"
          className={classes2.button}
          startIcon={<AddIcon />}
          onClick={() => history.push("/articles/articles")}
        >
          View Articles
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
              {/* <FormsUI
                id="course"
                name="course"
                label="Course Name"
                type="text"
                value={formik.values.course}
                onChange={formik.handleChange}
                error={formik.touched.course && Boolean(formik.errors.course)}
                helperText={formik.touched.course && formik.errors.course}
              /> */}
              {/* <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ backgroundColor: "#fffff9" }}
              >
                <InputLabel htmlFor="outlined-age-native-simple">
                  Course*
                </InputLabel>

                
              </FormControl> */}

              <Autocomplete
                  id="combo-box-demo"
                  options={courses}
                  getOptionLabel={(option) => option.course}
                  onChange={(event, value) => {
                    
                    if(value)
                    {
                      setSelect(value.id)
                      setCourseName(value.course);
                    }
                  }}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      style={{ backgroundColor: "#fffff9" }}
                      {...params}
                      label="Author*"
                      variant="outlined"
                    />
                  )}
                />
            </div>
            <div className="inner-element">
              <FormsUI
                id="title"
                name="title"
                label="Title"
                type="text"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </div>

            <div className="inner-element"> 
              {/* <textarea id="myEditor" value={description} name="description" onChange={(e) => handleDescription(e)}>
            <input type="submit" value="Save" />
            </textarea> */}
              <h4 style={{ color: "#686868" }}>Description*</h4>
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
                 height: "450px",

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
                id="blog_category"
                name="blog_category"
                label="Category"
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
              <FormsUI
                id="blog_type"
                name="blog_type"
                label="Blog Type"
                type="text"
                value={formik.values.blog_type}
                onChange={formik.handleChange}
                error={
                  formik.touched.blog_type && Boolean(formik.errors.blog_type)
                }
                helperText={formik.touched.blog_type && formik.errors.blog_type}
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
              <FormsUI
                id="author"
                name="author"
                label="Author"
                type="text"
                value={formik.values.author}
                onChange={formik.handleChange}
                error={formik.touched.author && Boolean(formik.errors.author)}
                helperText={formik.touched.author && formik.errors.author}
              />
            </div>
            <div className="inner-element">
              <FormsUI
                id="author_desc"
                name="author_desc"
                label="Author Description"
                type="text"
                value={formik.values.author_desc}
                onChange={formik.handleChange}
                error={
                  formik.touched.author_desc &&
                  Boolean(formik.errors.author_desc)
                }
                helperText={
                  formik.touched.author_desc && formik.errors.author_desc
                }
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
                Add Articles
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Title:</strong> {formik.values.title}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Article:</strong> {striptags(description)}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Category:</strong> {formik.values.blog_category}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Blog Type:</strong> {formik.values.blog_type}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>URL Title:</strong> {formik.values.url_title}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Meta Title:</strong> {formik.values.meta_title}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Meta Description:</strong> {formik.values.meta_desc}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Rating:</strong> {formik.values.rating}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Author:</strong> {formik.values.author}
                </Typography>
                <Typography gutterBottom style={{ fontSize: "15px" }}>
                  <strong>Author Description:</strong>{" "}
                  {formik.values.author_desc}
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

export default ArticlesDetails;
