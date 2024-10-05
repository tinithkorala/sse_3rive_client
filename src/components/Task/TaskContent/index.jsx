import { Box, Grid2 as Grid } from "@mui/material";
import TaskItem from "../TaskItem";
import { useTaskContext } from "../../../context/TaskContext";

const TaskContent = () => {
  const { taskList } = useTaskContext();

  return (
    <Box>
      <Grid container spacing={2}>
        {taskList?.map((el) => (
          <TaskItem key={el.id} task={el} />
        ))}
      </Grid>
    </Box>
  );
};

export default TaskContent;
