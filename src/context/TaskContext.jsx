import {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { TASK_PRIORITY_KEYS_ARRAY } from "../config/enumConfig";
import { taskFilter } from "../api/taskApi";
import useAppSnackbar from "../hooks/useAppSnackbar";

const TaskContext = createContext();

const TaskProvider = ({ options, children }) => {
  const { showErrorSnackbar, showSuccessSnackbar, snackbarTexts } = useAppSnackbar();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const [taskList, setTaskList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleFetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const statusStr = options?.keyword;

      const priorityStr =
        priorityFilter === "ALL"
          ? TASK_PRIORITY_KEYS_ARRAY?.join(",")
          : priorityFilter;
      const response = await taskFilter(priorityStr, statusStr, currentPage);
      setTaskList(response?.data?.tasks || []);
      setTotalPage(response?.totalPages || 0);
      showSuccessSnackbar(snackbarTexts?.filterSuccess);
    } catch (error) {
      showErrorSnackbar(error);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [currentPage, options?.keyword, priorityFilter]);

  useEffect(() => {
    handleFetchTasks();
  }, [handleFetchTasks]);

  useEffect(() => {
    setCurrentPage(1);
  }, [priorityFilter]);

  return (
    <TaskContext.Provider
      value={useMemo(
        () => ({
          priorityFilter,
          setPriorityFilter,
          taskList,
          currentPage,
          setCurrentPage,
          totalPage,
          options,
          loading,
          error,
          handleFetchTasks,
        }),
        [
          priorityFilter,
          taskList,
          currentPage,
          totalPage,
          options,
          loading,
          error,
          handleFetchTasks,
        ]
      )}
    >
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.object.isRequired,
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within an TaskProvider");
  }
  return context;
};

export { TaskContext, TaskProvider, useTaskContext };
