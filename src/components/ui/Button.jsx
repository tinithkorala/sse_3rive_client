import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";

const Button = ({ title, icon, onClick = null }) => {
  return (
    <MuiButton variant="contained" startIcon={icon} onClick={onClick}>
      {title}
    </MuiButton>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
