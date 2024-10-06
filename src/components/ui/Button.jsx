import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";

const Button = ({
  title,
  icon,
  onClick = null,
  variant = "contained",
  color = "primary",
  type = "button",
}) => {
  return (
    <MuiButton
      variant={variant}
      startIcon={icon}
      onClick={onClick}
      color={color}
      type={type}
    >
      {title}
    </MuiButton>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
