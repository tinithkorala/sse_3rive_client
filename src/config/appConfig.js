export const stateStatus = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
});

export const snackbarVariants = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
});

export const snackbarTexts = {
  filterSuccess: 'Filtered Successfully.',
  saveSuccess: 'Saved Successfully.',
  updateSuccess: 'Edited Successfully.',
  deleteSuccess: 'Deleted Successfully.',
  errorMessage: 'Something went wrong',
  successMessage: 'Successfull',
  errorAuthMessage: 'Forbidden. Try Sign-in again',
  loadingMessage: 'Loading...',
  filteringMessage: 'Data Filtering...',
};

export const apiStates = {
  success: "success",
  fail: "fail"
}