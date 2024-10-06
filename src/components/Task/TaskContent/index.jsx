import { Box, Grid2 as Grid } from "@mui/material";
import TaskItem from "../TaskItem";
import { useTaskContext } from "../../../context/TaskContext";
import EmptyTaskCard, { emptyContentMessage } from "../EmptyTaskCard";

const TaskContent = () => {
  const { taskList } = useTaskContext();

  const taskListCount = taskList.length === 0;

  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}
      >
        {taskListCount && (
          <EmptyTaskCard message={emptyContentMessage.default} />
        )}
        {taskList?.map((el) => (
          <TaskItem key={el.id} task={el} />
        ))}
      </Grid>
    </Box>
  );
};

export default TaskContent;
