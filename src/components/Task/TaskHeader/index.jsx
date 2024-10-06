import { useMemo, useState } from "react";

import PageTitle from "../../ui/PageTitle";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import { Stack } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useTaskContext } from "../../../context/TaskContext";
import { TASK_PRIORITY_VALUES_ARRAY } from "../../../config/enumConfig";
import Modal from "../../ui/Modal";
import TaskForm from "./../TaskForm";
import moment from "moment";

const initialState = {
  title: "",
  description: "",
  priority: "LOW",
  status: "IN_PROGRESS",
  due_date: moment().startOf('day'),
};

const TaskHeader = () => {
  const { options, priorityFilter, setPriorityFilter } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const priorityArr = useMemo(
    () => [
      {
        keyword: "ALL",
        variant: "default",
      },
      ...TASK_PRIORITY_VALUES_ARRAY,
    ],
    []
  );

  const handleModalToggle = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <>
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
          <Button
            title="New Task"
            icon={<ControlPointIcon />}
            onClick={handleModalToggle}
          />
        </Stack>
      </Stack>
      <Modal
        open={isModalOpen}
        title="Create New Task"
        description="Fill in the details below to create a new task"
        onClose={handleModalToggle}
      >
        <TaskForm initialState={initialState} onCancel={handleModalToggle}/>
      </Modal>
    </>
  );
};

export default TaskHeader;
