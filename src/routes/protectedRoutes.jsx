import AllTasks from "../pages/AllTasks";

export const protectedRoutes = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/',
    component: <h1>Dashboard</h1>,  
    isNavItem: true,
  },
  {
    id: 2,
    name: 'All Tasks',
    path: '/tasks-all',
    component: <AllTasks />, 
    isNavItem: true,
  },
  {
    id: 3,
    name: 'In Progress Tasks',
    path: '/tasks-in-progress',
    component: <h1>In Progress Tasks</h1>,
    isNavItem: true,
  },
  {
    id: 4,
    name: 'Pending Tasks',
    path: '/tasks-pending',
    component: <h1>Pending Tasks</h1>,  
    isNavItem: true,
  },
  {
    id: 5,
    name: 'Completed Tasks',
    path: '/tasks-completed',
    component: <h1>Completed Tasks</h1>,  
  },
  {
    id: 6,
    name: 'On Hold Tasks',
    path: '/tasks-on-hold',
    component: <h1>On Hold Tasks</h1>,  
    isNavItem: true,
  },
  {
    id: 7,
    name: 'Cancelled Tasks',
    path: '/tasks-cancelled',
    component: <h1>Cancelled Tasks</h1>,  
    isNavItem: true,
  }
]