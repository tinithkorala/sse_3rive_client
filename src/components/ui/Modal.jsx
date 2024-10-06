import ReactDOM from "react-dom";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

const Modal = ({ open, title, description, onClose, children }) => {
  return ReactDOM.createPortal(
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {description !== "" && (
          <Typography sx={{ py: 0, px: 0, mb: 1.5, fontSize: "1.25rem" }}>
            {description}
          </Typography>
        )}
        {children}
      </DialogContent>
    </Dialog>,
    document.body
  );
};

export default Modal;
