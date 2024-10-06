import { Stack } from "@mui/material";
import TextComponent from "../../form/TextComponent";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import PropTypes from "prop-types";
import RadioButtonsComponent from "../../form/RadioButtonsComponent";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  TASK_PRIORITY_KEYS_ARRAY,
  TASK_STATUS_VALUES_ARRAY,
} from "../../../config/enumConfig";
import SelectComponent from "../../form/SelectComponent";
import DatePickerComponent from "../../form/DatePickerComponent";
import Button from "../../ui/Button";
import { taskCreate, taskUpdate } from "../../../api/taskApi";
import { useTaskContext } from "../../../context/TaskContext";

const TaskForm = ({ initialState, onCancel }) => {

  const { handleFetchTasks } = useTaskContext();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (!values?.id) {
          await taskCreate(values);
        } else {
          await taskUpdate(values);
        }
        formik.resetForm();
        handleFetchTasks();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Stack
      sx={{ width: "100%" }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <TextComponent formik={formik} label="Title" field="title" type="text" />
      <TextComponent
        formik={formik}
        label="Description"
        field="description"
        type="text"
      />
      <RadioButtonsComponent
        formik={formik}
        label="Priority"
        field="priority"
        radioList={TASK_PRIORITY_KEYS_ARRAY}
      />
      <SelectComponent
        formik={formik}
        label="Status"
        field="status"
        menuList={TASK_STATUS_VALUES_ARRAY}
      />
      <DatePickerComponent formik={formik} label="Due Date" field="due_date" />
      <Stack direction="row" gap={2} justifyContent="flex-end">
        <Button
          title="Create"
          onClick={() => {}}
          icon={<ControlPointIcon />}
          type="submit"
        />
        <Button
          color="error"
          title="Cancel"
          onClick={() => {
            formik.resetForm();
            onCancel();
          }}
          icon={<CancelIcon />}
        />
      </Stack>
    </Stack>
  );
};

TaskForm.propTypes = {
  initialState: PropTypes.object.isRequired,
  onCancel: PropTypes.func,
};

export default TaskForm;
