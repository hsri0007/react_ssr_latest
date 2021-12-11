import { Button } from "@material-ui/core";
import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from "react-router";
function EditButton({id}) {
  const history = useHistory();
  console.log(id)
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => history.push("/courses/editCourse")}>
        <EditIcon/>
      </Button>
    </div>
  );
}

export default EditButton;
