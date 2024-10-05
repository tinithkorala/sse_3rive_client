import DashboardIcon from '@mui/icons-material/Dashboard';
import AllTasks from "../pages/task/AllTasks";
import WidgetsIcon from '@mui/icons-material/Widgets';
import CachedIcon from '@mui/icons-material/Cached';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import CancelIcon from '@mui/icons-material/Cancel';

export const menuRoutes = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    component: <h1>Dashboard1</h1>,
    isNavItem: true,
    iconComponent: <DashboardIcon />,
  },
  {
    id: 2,
    name: "All Tasks",
    path: "/tasks-all",
    component: <AllTasks />,
    isNavItem: true,
    iconComponent: <WidgetsIcon />,
  },
  {
    id: 3,
    name: "In Progress Tasks",
    path: "/tasks-in-progress",
    component: <h1>In Progress Tasks</h1>,
    isNavItem: true,
    iconComponent: <CachedIcon />,
  },
  {
    id: 4,
    name: "Pending Tasks",
    path: "/tasks-pending",
    component: <h1>Pending Tasks</h1>,
    isNavItem: true,
    iconComponent: <WorkHistoryIcon />,
  },
  {
    id: 5,
    name: "Completed Tasks",
    path: "/tasks-completed",
    component: <h1>Completed Tasks</h1>,
    iconComponent: <TaskAltIcon />,
  },
  {
    id: 6,
    name: "On Hold Tasks",
    path: "/tasks-on-hold",
    component: <h1>On Hold Tasks</h1>,
    isNavItem: true,
    iconComponent: <PauseCircleFilledIcon />,
  },
  {
    id: 7,
    name: "Cancelled Tasks",
    path: "/tasks-cancelled",
    component: <h1>Cancelled Tasks</h1>,
    isNavItem: true,
    iconComponent: <CancelIcon />,
  },
];

export default [...menuRoutes];
