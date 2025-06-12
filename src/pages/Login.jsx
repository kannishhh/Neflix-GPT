import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
        className=" "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
          alt="Background_logo"
        />
      </div>
      <form className="absolute w-3/10 p-12 bg-[rgba(0,0,0,0.8)] my-24 mx-auto left-0 right-0 text-white rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-600/10 rounded border border-gray-400"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-3 my-2 w-full bg-gray-600/10 rounded border border-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-600/10 rounded border border-gray-400"
        />
        <button className="p-2 my-3 bg-red-600 w-full font-semibold rounded cursor-pointer hover:bg-red-700">
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
            className="w-4 h-4 accent-white bg-transparent border border-gray-500 rounded-sm cursor-pointer  "
            type="checkbox"
            id="remember"
          />
          <label htmlFor="remember_me" className="ml-2">
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
        <a href="#" className="text-blue-500 text-sm underline">Learn more</a>
      </form>
    </div>
  );
};

export default Login;
