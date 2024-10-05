import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import TaskHeader from "./TaskHeader";
import TaskContent from "./TaskContent";
import TaskFooter from "./TaskFooter";
import { TaskProvider } from "../../context/TaskContext";

const TaskWrapper = ({ options }) => {
  return (
    <TaskProvider options={options}>
      <Stack>
        <TaskHeader />
        <TaskContent />
        <TaskFooter />
      </Stack>
    </TaskProvider>
  );
};

TaskWrapper.propTypes = {
  options: PropTypes.object.isRequired,
};

export default TaskWrapper;
