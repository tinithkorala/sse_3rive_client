import { useMemo } from "react";

import PageTitle from "../../ui/PageTitle";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import { Stack } from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useTaskContext } from "../../../context/TaskContext";
import { TASK_PRIORITY } from "../../../config/enumConfig";

const TaskHeader = () => {
  const { options, priorityFilter, setPriorityFilter } = useTaskContext();

  const priorityArr = useMemo(
    () => [
      {
        keyword: "ALL",
        variant: "default",
      },
      ...Object.values(TASK_PRIORITY),
    ],
    []
  );

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
        <ButtonGroup
          buttons={priorityArr}
          selected={priorityFilter}
          onSelect={setPriorityFilter}
        />
        <Button title="New Task" icon={<ControlPointIcon />} />
      </Stack>
    </Stack>
  );
};

export default TaskHeader;
