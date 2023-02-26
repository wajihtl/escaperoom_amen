import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCookies } from "react-cookie";

export default function ReplyMessage({ setshow, type }) {
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);

    setshow(false);
  };

  return (
    <div>
      {type === 1 ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"the reply message"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              reply message
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/*  <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose} autoFocus>
              Nice
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"the reply message"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              normal reply message
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/*  <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose} autoFocus>
              Nice
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
