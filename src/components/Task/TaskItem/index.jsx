import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack, Grid2 as Grid, IconButton, Box } from "@mui/material";
import PropTypes from "prop-types";

import styles from "./index.module.css";
import Modal from "../../ui/Modal";
import TaskForm from "../TaskForm";
import { useMemo, useState } from "react";
import moment from "moment";
import TaskCardContent from "../TaskCardContent";
import useConfirmationModal from "../../../hooks/useConfirmationModal";
import ConfirmationModalComponent from "../../ui/ConfirmationModal";
import { modalText } from "../../../utils/modalTextUtils";
import { taskDelete } from "../../../api/taskApi";
import { useTaskContext } from "../../../context/TaskContext";

const TaskItem = ({ task }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const { setCurrentPage } = useTaskContext();
  const { modalConfig, isModalOpen, setModalConfig, setIsModalOpen, hideModal } =
    useConfirmationModal();

  const formInitialState = useMemo(() => {
    const { id, title, description, status, priority, due_date } = task;
    return {
      id,
      title,
      description,
      status,
      priority,
      due_date: moment(due_date).startOf("day"),
    };
  }, [task]);

  const handleEditModalToggle = () => {
    setIsEditModalOpen((prev) => !prev);
  };

  const handleViewModalToggle = () => {
    setIsViewModalOpen((prev) => !prev);
  };

  const handleConfirmDelete = () => {
    setModalConfig({
      title: modalText.deleteConfirmationModal.title,
      description: modalText.deleteConfirmationModal.description,
      buttonLabel: modalText.deleteConfirmationModal.okButtonLabel,
      onCancel: () => hideModal(),
      onProcess: async () => {
        await taskDelete(task.id);
        setCurrentPage(1);
        hideModal();
      },
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card className={styles.card} elevation={8}>
          <Box sx={{ p: 2 }}>
            <TaskCardContent task={task} isSummary={true} />
          </Box>
          <CardActions>
            <Stack
              direction="row"
              justifyContent="flex-end"
              sx={{ width: "100%", flexWrap: "wrap" }}
            >
              <IconButton
                aria-label="view"
                size="large"
                color="success"
                className={styles["action-button"]}
                onClick={handleViewModalToggle}
              >
                <VisibilityIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
              <IconButton
                aria-label="edit"
                size="large"
                color="info"
                sx={{ ml: 0 }}
                onClick={handleEditModalToggle}
              >
                <EditIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                color="error"
                sx={{ ml: 0 }}
                onClick={handleConfirmDelete}
              >
                <DeleteIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Modal
        open={isEditModalOpen}
        title="Update Task"
        description="Fill in the details below to update the task"
        onClose={handleEditModalToggle}
      >
        <TaskForm
          initialState={formInitialState}
          onCancel={handleEditModalToggle}
        />
      </Modal>
      <Modal
        open={isViewModalOpen}
        title="View Task"
        description=""
        onClose={handleViewModalToggle}
      >
        <TaskCardContent task={task} />
      </Modal>
      {isModalOpen && (
        <ConfirmationModalComponent
          open={isModalOpen}
          title={modalConfig.title}
          description={modalConfig.description}
          onCancel={modalConfig.onCancel}
          onProcess={modalConfig.onProcess}
          onClose={() => setIsModalOpen(false)}
          buttonLabel={modalConfig.buttonLabel}
        />
      )}
    </>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
