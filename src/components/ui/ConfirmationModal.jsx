import ReactDOM from "react-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";

const ConfirmationModalComponent = ({
  open,
  title,
  description,
  onCancel,
  onProcess,
  onClose,
  buttonLabel,
}) => {
  const handleCancel = () => {
    if (onCancel) onCancel();
    onClose();
  };

  const handleProcess = () => {
    if (onProcess) onProcess();
    onClose();
  };

  return ReactDOM.createPortal(
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography sx={{ py: 0, px: 0 }}>{description}</Typography>
      </DialogContent>
      <DialogActions sx={{ py: 2, px: 3 }}>
        <Button
          size="small"
          variant="contained"
          onClick={handleProcess}
          color="primary"
        >
          {buttonLabel}
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={handleCancel}
          color="primary"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  );
};

export default ConfirmationModalComponent;
