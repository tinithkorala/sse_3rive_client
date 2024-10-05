import { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const TaskContext = createContext();

const TaskProvider = ({ options, children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState('ALL')

  return (
    <TaskContext.Provider
      value={useMemo(
        () => ({
          priorityFilter,
          setPriorityFilter,
          options,
          loading,
          error,
        }),
        [priorityFilter, options, loading, error]
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
