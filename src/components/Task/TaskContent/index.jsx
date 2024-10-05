import { Box, Grid2 as Grid } from "@mui/material";
import TaskItem from "../TaskItem";

const TaskContent = () => {
  return (
    <Box sx={{  }}>
      <Grid container spacing={2}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </Grid>
    </Box>
  );
};

export default TaskContent;
