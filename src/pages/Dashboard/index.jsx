import React, { useState, useCallback, useEffect } from "react";
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

import {
  TASK_PRIORITY,
  TASK_STATUS,
  TASK_STATUS_KEYS_ARRAY,
  TASK_STATUS_VALUES_ARRAY,
} from "./../../config/enumConfig";
import ButtonGroup from "../../components/ui/ButtonGroup";
import BarChart from "../../components/ui/BarChart";
import PieChart from "../../components/ui/PieChart";
import { useTheme } from "@mui/material/styles";
import { dashboardStats } from "../../api/dashboardApi";
import { useAuth } from "./../../hooks/useAuth";

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

// eslint-disable-next-line react/prop-types
const SummaryCard = ({ title, count, icon: IconComponent, variant }) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
      <Card
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          m: 0,
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
        {/* Background icon */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            p: 2,
            opacity: 0.15,
            fontSize: "4.5rem",
          }}
        >
          {IconComponent && (
            <IconComponent fontSize="inherit" color={variant} />
          )}
        </Box>
      </Card>
    </Grid>
  );
};

export const Dashboard = () => {
  const theme = useTheme();

  const { user } = useAuth();

  const [fetchedData, setFetchedData] = useState(initialState);
  const [periodFilter, setPeriodFilter] = useState(periodList.TODAY.keyword);

  const handleDashbordStats = useCallback(async () => {
    try {
      const response = await dashboardStats(periodFilter);
      setFetchedData(response?.data || initialState);
    } catch (error) {
      console.error(error.message);
    }
  }, [periodFilter]);

  useEffect(() => {
    handleDashbordStats();
  }, [handleDashbordStats]);

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
        <SummaryCard
          title="All Tasks"
          count={fetchedData.allTasksPriorityWise.reduce(
            (sum, task) => sum + task.task_count,
            0
          )}
          icon={TaskIcon}
        />
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
            xLabels={fetchedData.allTasksStatusWise.map(
              (task) => TASK_STATUS[task.status].label
            )}
            values={fetchedData.allTasksStatusWise.map((task) =>
              Number(task.task_count)
            )}
            colors={fetchedData.allTasksStatusWise.map(
              (task) => theme.palette[TASK_STATUS[task.status]?.variant].main
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} spacing={2}>
          <PieChart
            title="Priority wise Tasks"
            xLabels={fetchedData.allTasksPriorityWise.map(
              (task) => TASK_PRIORITY[task.priority].keyword
            )}
            values={fetchedData.allTasksPriorityWise.map((task) => ({
              value: Number(task.task_count),
              name: TASK_PRIORITY[task.priority].keyword,
            }))}
            colors={fetchedData.allTasksPriorityWise.map(
              (task) =>
                theme.palette[TASK_PRIORITY[task.priority]?.variant].main
            )}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
