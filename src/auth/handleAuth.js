import checkValidData from "../utilities/validate";
import { signInUser } from "./signIn";
import { signUpUser } from "./SignUp";

export const handleAuth = async ({
  isSignInForm,
  nameRef,
  emailRef,
  passwordRef,
  dispatch,
  navigate,
  setErrorMessage,
}) => {
  const email = emailRef.current?.value;
  const password = passwordRef.current?.value;
  const name = nameRef.current?.value;

  const validationError = checkValidData(email, password);
  setErrorMessage(validationError);
  if (validationError) return;

  if (!isSignInForm) {
    const result = await signUpUser(name, email, password, dispatch);
    if (result.success) navigate("/browse");
    else setErrorMessage(result.message);
  } else {
    const result = await signInUser(email, password, dispatch);
    if (result.success) navigate("/browse");
    else setErrorMessage(result.message);
  }
};
