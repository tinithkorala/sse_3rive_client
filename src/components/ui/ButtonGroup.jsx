import PropTypes from "prop-types";
import { Button } from "@mui/material";
import MuiButtonGroup from "@mui/material/ButtonGroup";

const ButtonGroup = ({ buttons, selected, onSelect }) => {
  return (
    <MuiButtonGroup variant="outlined" size="medium" aria-label="Small button group">
      {buttons?.map((el) => (
        <Button
          key={el.keyword}
          variant={selected === el.keyword ? "contained" : "outlined"}
          onClick={() => onSelect(el.keyword)}
        >
          {el.keyword}
        </Button>
      ))}
    </MuiButtonGroup>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ButtonGroup;
