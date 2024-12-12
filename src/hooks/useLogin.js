import { usePostLoginMutation } from "../api/loginapi";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
  SNACKBAR_COLOR,
  SUCCESS_MESSAGES,
} from "../constants/messages";

export const useLogin = ( setSnackbar, navigate, setErrorMessage) => {
  
  const [login] = usePostLoginMutation();

  const onLoginSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      setSnackbar({
        open: true,
        message: SUCCESS_MESSAGES.loginSuccess,
        severity: SNACKBAR_COLOR.success,
      });
      navigate("/user/index");
    } catch (e) {
      console.log("error", e);

      if (!navigator.online) {
        setErrorMessage({
          emailError: "",
          passError: "",
        });
        setSnackbar({
          open: true,
          message: ERROR_MESSAGES.noInternet,
          severity: SNACKBAR_COLOR.error,
        });
      }

      if (
        e.code === ERROR_CODES.networkError ||
        e.message === ERROR_CODES.networkMessage
      ) {
        setErrorMessage({
          emailError: "",
          passError: "",
        });
        setSnackbar({
          open: true,
          message: ERROR_MESSAGES.serverUnreachable,
          severity: SNACKBAR_COLOR.error,
        });
      }

      if (e.data) {
        const { message, errors } = e.data;
        setErrorMessage({
          emailError: errors?.email?.[0] || "",
          passError: errors?.password?.[0] || message || "",
        });
        setSnackbar({
          open: true,
          message: message || ERROR_MESSAGES.unexpected,
          severity: SNACKBAR_COLOR.error,
        });
      } else {
        setErrorMessage({
          emailError: "",
          passError: "",
        });
        setSnackbar({
          open: true,
          message: ERROR_MESSAGES.unexpected,
          severity: SNACKBAR_COLOR.error,
        });
      }
    }
  };

  return { onLoginSubmit };
};
