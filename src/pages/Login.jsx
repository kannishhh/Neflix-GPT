import { useRef, useState } from "react";
import Header from "../layouts/Header";
import checkValidData from "../utilities/validate";
import { auth } from "../utilities/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../stores/userSlice";
import { BG_URL } from "../utilities/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => setErrorMessage(error.message));
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName } = userCredential.user;
          dispatch(addUser({ uid, email, displayName }));
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="Background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/10 p-12 bg-[rgba(0,0,0,0.8)] my-24 mx-auto left-0 right-0 text-white rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-600/10 rounded border border-gray-400 focus:ring-2"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          autoComplete="email"
          className="p-3 my-2 w-full bg-gray-600/10 rounded border border-gray-400 focus:ring-2"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="p-3 my-2 w-full bg-gray-600/10 rounded border border-gray-400 focus:ring-2"
        />

        <p className="text-red-600 text-md mt-2">{errorMessage}</p>

        <button
          className="p-2 my-3 bg-red-600 w-full font-semibold rounded cursor-pointer hover:bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <h1 className="w-full text-gray-400 text-center font-medium">OR</h1>

        <button className="p-2 my-3 bg-gray-400/50 font-semibold w-full cursor-pointer rounded hover:bg-gray-500/50">
          Use a sign-in code
        </button>

        <h1 className="text-md text-center underline hover:text-gray-300">
          Forgot password?
        </h1>

        <div className="flex items-center text-md text-gray-400 mt-4">
          <input
            className="w-4 h-4 accent-white bg-transparent border border-gray-500 rounded-sm cursor-pointer"
            type="checkbox"
            id="remember"
          />
          <label htmlFor="remember" className="ml-2">
            Remember me
          </label>
        </div>

        <p className="text-gray-400 py-3 text-lg" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              New to Netflix?
              <span className="text-white cursor-pointer font-semibold hover:underline">
                Sign up now.
              </span>
            </>
          ) : (
            <>
              Already registered?
              <span className="text-white cursor-pointer font-semibold hover:underline">
                Sign in now.
              </span>
            </>
          )}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <a href="#" className="text-blue-500 text-sm underline">
          Learn more
        </a>
      </form>
    </div>
  );
};

export default Login;
