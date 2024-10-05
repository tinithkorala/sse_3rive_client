import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { Stack, Grid2 as Grid, Chip, IconButton } from "@mui/material";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { grey } from "@mui/material/colors";
import FlagIcon from "@mui/icons-material/Flag";
import PropTypes from "prop-types";
import { truncateString } from "../../../utils/stringUtils";
import { dateDisplay, formatDate } from "../../../utils/dateUtils";
import { TASK_PRIORITY, TASK_STATUS } from "../../../config/enumConfig";

import styles from './index.module.css'

const TaskItem = ({ task }) => {
  const priority = TASK_PRIORITY?.[task.priority];
  const status = TASK_STATUS?.[task.status];
  const DynamicIcon = status.icon;

  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <Card className={styles.card} elevation={8}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">{task.title}</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ color: grey[600], my: 2 }}
          >
            <Typography variant="body2">
              Created {dateDisplay(task?.createdAt)}{" "}
            </Typography>
            <Typography variant="body2">
              Due on {formatDate(task?.due_date)}{" "}
            </Typography>
          </Stack>
          <Typography variant="body1">
            {truncateString(task?.description || "", 100)}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" gap={0.5} justifyContent="flex-end" sx={{ml: 1}}>
            <Chip
              color={priority.variant}
              icon={<FlagIcon sx={{ fontSize: "1.25rem" }} />}
              label={priority.keyword}
            />
            <Chip
              color={status.variant}
              icon={<DynamicIcon sx={{ fontSize: "1.25rem" }} />}
              label={status.label}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            sx={{ width: "100%" }}
          >
            <IconButton
              aria-label="view"
              size="large"
              color="success"
              className={styles['action-button']}
            >
              <VisibilityIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
            <IconButton
              aria-label="edit"
              size="large"
              color="info"
              sx={{ ml: 0 }}
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
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
