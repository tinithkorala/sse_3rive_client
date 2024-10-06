import { useCallback } from "react";
import { useSnackbar } from "notistack";

import SnackbarCloseIcon from "./../components/ui/SnackbarCloseIcon";
import { snackbarTexts, snackbarVariants } from "../config/appConfig";

const useAppSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showSnackbar = useCallback(
    (message, variant = "default") => {
      enqueueSnackbar(message, {
        variant,
        // action: (key) => (
        //   <SnackbarCloseIcon onCloseSnackbar={() => closeSnackbar(key)} />
        // ),
      });
    },
    [enqueueSnackbar, closeSnackbar]
  );

  const showErrorSnackbar = useCallback(
    (error, message) => {
      const showMessage =
        error?.status === 403
          ? snackbarTexts?.errorAuthMessage
          : message || snackbarTexts?.errorMessage;
      enqueueSnackbar(showMessage, {
        variant: snackbarVariants?.ERROR,
        // action: (key) => (
        //   <SnackbarCloseIcon onCloseSnackbar={() => closeSnackbar(key)} />
        // ),
      });
    },
    [enqueueSnackbar, closeSnackbar]
  );

  const showSuccessSnackbar = useCallback(
    (message) => {
      const showMessage = message || snackbarTexts?.successMessage;
      enqueueSnackbar(showMessage, {
        variant: snackbarVariants?.SUCCESS,
        // action: (key) => (
        //   <SnackbarCloseIcon onCloseSnackbar={() => closeSnackbar(key)} />
        // ),
      });
    },
    [enqueueSnackbar, closeSnackbar]
  );

  return {
    showSnackbar,
    showErrorSnackbar,
    showSuccessSnackbar,
    snackbarTexts,
  };
};

export default useAppSnackbar;
