import React from "react";
import { Snackbar, Alert, Slide } from "@mui/material";

const MessageSnackbar = ({ open, onClose, severity, message }) => {
  const TransitionUp = (props) => <Slide {...props} direction="up" />;

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnackbar;
