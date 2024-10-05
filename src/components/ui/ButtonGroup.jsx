import { Button } from "@mui/material";
import MuiButtonGroup from "@mui/material/ButtonGroup";

import { TASK_PRIORITY } from "../../config/enumConfig";

const ButtonGroup = () => {
  return (
    <MuiButtonGroup size="medium" aria-label="Small button group">
      <Button key={1}>All</Button>
      {Object.keys(TASK_PRIORITY)?.map((el) => (
        <Button key={el}>{el}</Button>
      ))}
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
