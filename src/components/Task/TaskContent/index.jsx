import { Box, Grid2 as Grid } from "@mui/material";
import TaskItem from "../TaskItem";
import { useTaskContext } from "../../../context/TaskContext";

const TaskContent = () => {

  const { taskList } = useTaskContext();

  return (
    <Box sx={{  }}>
      <Grid container spacing={2}>
        {/* <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem /> */}
        {
          taskList?.map((el) => <TaskItem key={el.id} />)
        }
      </Grid>
    </Box>
  );
};

export default TaskContent;
