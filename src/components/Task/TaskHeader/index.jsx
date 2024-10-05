import PageTitle from "../../ui/PageTitle";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTaskContext } from "../../../context/TaskContext";

const TaskHeader = () => {
  const { options } = useTaskContext();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      sx={{ mb: 2 }}
    >
      <PageTitle title={options?.title} />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "flex-end" }}
        alignItems={{ xs: "center", sm: "flex-end" }}
        gap={2}
      >
        <ButtonGroup />
        <Button title="New" icon={<AddIcon />} />
      </Stack>
    </Stack>
  );
};

export default TaskHeader;
