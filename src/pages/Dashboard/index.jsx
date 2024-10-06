import { useState, useCallback, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Grid2 as Grid,
  Container,
} from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import PropTypes from "prop-types";

import { TASK_PRIORITY, TASK_STATUS } from "./../../config/enumConfig";
import ButtonGroup from "../../components/ui/ButtonGroup";
import BarChart from "../../components/ui/BarChart";
import PieChart from "../../components/ui/PieChart";
import { useTheme } from "@mui/material/styles";
import { dashboardStats } from "../../api/dashboardApi";
import { useAuth } from "./../../hooks/useAuth";
import styles from "./index.module.css";
import useAppSnackbar from "../../hooks/useAppSnackbar";

const initialState = {
  allTasksStatusWise: [
    {
      status: "COMPLETED",
      task_count: "0",
    },
    {
      status: "ON_HOLD",
      task_count: "0",
    },
    {
      status: "IN_PROGRESS",
      task_count: "0",
    },
    {
      status: "PENDING",
      task_count: "0",
    },
    {
      status: "CANCELLED",
      task_count: "0",
    },
  ],
  allTasksPriorityWise: [
    {
      priority: "LOW",
      task_count: 0,
    },
    {
      priority: "MEDIUM",
      task_count: 0,
    },
    {
      priority: "HIGH",
      task_count: 0,
    },
  ],
};

const periodList = {
  TODAY: { keyword: "TODAY" },
  THIS_MONTH: { keyword: "THIS_MONTH" },
  THIS_YEAR: { keyword: "THIS_YEAR" },
  ALL: { keyword: "ALL" },
};

const SummaryCard = ({ title, count, icon: IconComponent, variant }) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
      <Card
        className={styles["summary-card-card"]}
        sx={{
          boxShadow: 3,
          borderLeft: 6,
          borderColor: `${variant}.main`,
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            {count}
          </Typography>
        </CardContent>
        <Box className={styles["summary-card-icon"]} p={2}>
          {IconComponent && (
            <IconComponent fontSize="inherit" color={variant} />
          )}
        </Box>
      </Card>
    </Grid>
  );
};

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.object,
  variant: PropTypes.string,
};

export const Dashboard = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const { showErrorSnackbar, showSuccessSnackbar, snackbarTexts } = useAppSnackbar();
  const [fetchedData, setFetchedData] = useState(initialState);
  const [periodFilter, setPeriodFilter] = useState(periodList.TODAY.keyword);

  const handleDashbordStats = useCallback(async () => {
    try {
      const response = await dashboardStats(periodFilter);
      setFetchedData(response?.data || initialState);
      showSuccessSnackbar(snackbarTexts?.filterSuccess);
    } catch (error) {
      showErrorSnackbar(error)
      console.error(error.message);
    }
  }, [periodFilter, showErrorSnackbar, showSuccessSnackbar, snackbarTexts?.filterSuccess]);

  useEffect(() => {
    handleDashbordStats();
  }, [handleDashbordStats]);

  const allTasksCount = fetchedData?.allTasksPriorityWise?.reduce(
    (sum, task) => sum + task.task_count,
    0
  );

  const statusWiseTasks = fetchedData?.allTasksStatusWise || [];

  const priorityWiseTasks = fetchedData?.allTasksPriorityWise || [];

  const statusLabels = statusWiseTasks.map(
    (task) => TASK_STATUS[task.status].label
  );

  const statusValues = statusWiseTasks.map((task) => Number(task.task_count));

  const statusColors = statusWiseTasks.map(
    (task) => theme.palette[TASK_STATUS[task.status]?.variant].main
  );

  const priorityLabels = priorityWiseTasks.map(
    (task) => TASK_PRIORITY[task.priority].keyword
  );

  const priorityValues = priorityWiseTasks.map((task) => ({
    value: Number(task.task_count),
    name: TASK_PRIORITY[task.priority].keyword,
  }));

  const priorityColors = priorityWiseTasks.map(
    (task) => theme.palette[TASK_PRIORITY[task.priority]?.variant].main
  );

  return (
    <Container maxWidth="auto" disableGutters>
      <Grid container spacing={2} mb={4}>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Stack direction="row">
            <Typography variant="h4">Welcome,</Typography>
            <Typography
              color="primary"
              variant="h4"
              sx={{
                ml: 3,
                fontWeight: 600,
              }}
            >
              {user?.first_name} !
            </Typography>
          </Stack>
          <ButtonGroup
            buttons={Object.values(periodList)}
            selected={periodFilter}
            onSelect={setPeriodFilter}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={4}>
        <SummaryCard title="All Tasks" count={allTasksCount} icon={TaskIcon} />
        {fetchedData?.allTasksStatusWise?.map((status) => (
          <SummaryCard
            key={status.status}
            title={`${TASK_STATUS?.[status.status]?.label} Tasks`}
            count={status?.task_count}
            icon={TASK_STATUS?.[status.status]?.icon}
            variant={TASK_STATUS?.[status.status]?.variant}
          />
        ))}
      </Grid>
      <Grid container spacing={2} mb={4}>
        <Grid size={{ xs: 12, lg: 6 }} spacing={2}>
          <BarChart
            title="Status wise Tasks"
            xLabels={statusLabels}
            values={statusValues}
            colors={statusColors}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} spacing={2}>
          <PieChart
            title="Priority wise Tasks"
            xLabels={priorityLabels}
            values={priorityValues}
            colors={priorityColors}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
