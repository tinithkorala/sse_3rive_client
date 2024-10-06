import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack, Chip } from "@mui/material";
import { grey } from "@mui/material/colors";
import FlagIcon from "@mui/icons-material/Flag";
import PropTypes from "prop-types";
import { truncateString } from "../../../utils/stringUtils";
import { dateDisplay, formatDate } from "../../../utils/dateUtils";
import { TASK_PRIORITY, TASK_STATUS } from "../../../config/enumConfig";

const TaskCardContent = ({ task, isSummary = false }) => {
  const priority = TASK_PRIORITY?.[task.priority];
  const status = TASK_STATUS?.[task.status];
  const DynamicIcon = status.icon;

  return (
    <CardContent sx={{ p: 0 }}>
      <Stack direction="row" gap={0.5} justifyContent="flex-start">
        <Chip
          size="small"
          color={priority.variant}
          icon={<FlagIcon sx={{ fontSize: "1.25rem" }} />}
          label={priority.keyword}
        />
        <Chip
          size="small"
          color={status.variant}
          icon={<DynamicIcon sx={{ fontSize: "1.25rem" }} />}
          label={status.label}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={1}
      >
        <Typography variant="h5">{task.title}</Typography>
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
        {isSummary ? truncateString(task?.description || "", 100) : task?.description }
      </Typography>
    </CardContent>
  );
};

TaskCardContent.propTypes = {
  task: PropTypes.object.isRequired,
  isSummary: PropTypes.bool,
};

export default TaskCardContent;
