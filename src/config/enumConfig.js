import CachedIcon from "@mui/icons-material/Cached";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import CancelIcon from "@mui/icons-material/Cancel";

export const TASK_PRIORITY = Object.freeze({
  LOW: {
    keyword: "Low",
    variant: "success",
  },
  MEDIUM: {
    keyword: "Medium",
    variant: "warning",
  },
  HIGH: {
    keyword: "High",
    variant: "error",
  },
});

export const TASK_STATUS = Object.freeze({
  PENDING: {
    keyword: "PENDING",
    label: "Pending",
    variant: "warning",
    icon: WorkHistoryIcon,
  },
  IN_PROGRESS: {
    keyword: "IN_PROGRESS",
    label: "In Progress",
    variant: "info",
    icon: CachedIcon,
  },
  COMPLETED: {
    keyword: "COMPLETED",
    label: "Completed",
    variant: "success",
    icon: TaskAltIcon,
  },
  ON_HOLD: {
    keyword: "ON_HOLD",
    label: "On Hold",
    variant: "default",
    icon: PauseCircleFilledIcon,
  },
  CANCELLED: {
    keyword: "CANCELLED",
    label: "Cancelled",
    variant: "error",
    icon: CancelIcon,
  },
});


export const TASK_PRIORITY_KEYS_ARRAY = Object.keys(TASK_PRIORITY);
export const TASK_PRIORITY_VALUES_ARRAY = Object.values(TASK_PRIORITY);

export const TASK_STATUS_KEYS_ARRAY = Object.keys(TASK_STATUS);
export const TASK_STATUS_VALUES_ARRAY = Object.values(TASK_STATUS);
