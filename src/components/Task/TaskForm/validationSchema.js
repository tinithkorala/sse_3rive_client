import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, "Title should have a minimum length of 2")
    .max(200, "Title should have a maximum length of 200")
    .required("Title is a required field"),
  description: Yup.string()
    .required("Description is a required field"),
  priority: Yup.string()
    .required("Priority is a required field"),
  status: Yup.string()
    .required("Status is required"),
  due_date: Yup.date()
    .required("Due Date is required")
    .typeError("Due Date must be a valid date"),
});
