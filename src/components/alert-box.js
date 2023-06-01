import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
export default function AlertBox(props) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {props.status === 'success'?
      <Alert severity="success">Sucess, post is submitted!</Alert>:
      <Alert severity="error">Error, please complete the form!</Alert>
  }
    </Stack>
  );
}