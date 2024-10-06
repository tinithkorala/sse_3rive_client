import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { Stack, Grid2 as Grid, Chip, IconButton, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import FlagIcon from "@mui/icons-material/Flag";
import PropTypes from "prop-types";
import { truncateString } from "../../../utils/stringUtils";
import { dateDisplay, formatDate } from "../../../utils/dateUtils";
import { TASK_PRIORITY, TASK_STATUS } from "../../../config/enumConfig";

import styles from "./index.module.css";
import Modal from "../../ui/Modal";
import TaskForm from "../TaskForm";
import { useMemo, useState } from "react";
import moment from "moment";
import TaskCardContent from "../TaskCardContent";

const TaskItem = ({ task }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

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
    </>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
