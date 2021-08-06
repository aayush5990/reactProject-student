import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function StudentModal(props) {
  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Student Form</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form onChange={props.onFormChange}>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                value={props.data && props.data.name}
              />
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="Email"
                value={props.data && props.data.email}
              />
              <input
                name="age"
                type="text"
                className="form-control"
                placeholder="Age"
                value={props.data && props.data.age}
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.mode === "create" ? (
            <Button
              variant="contained"
              onClick={props.onCreate}
              color="primary"
            >
              Create
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={props.onUpdate}
              color="primary"
            >
              Update
            </Button>
          )}
          <Button onClick={props.onClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
