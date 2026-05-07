import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../stores/userSlice";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Home from "./Home";

const HomeRedirect = () => {
  const { user, loading } = useSelector((state) => state.user);
  if (loading) return <div className="text-white p-4">Loading...</div>;
  return user ? <Navigate to="/browse" /> : <Home />;
};

const LoginWrapper = () => {
  const { user, loading } = useSelector((state) => state.user);
  if (loading) return <div className="text-white p-4">Loading...</div>;
  if (user) return <Navigate to="/browse" />;
  return <Login />;
};

const BrowseWrapper = () => {
  const { user, loading } = useSelector((state) => state.user);
  if (loading) return <div className="text-white p-4">Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  return <Browse />;
};

const appRouter = createBrowserRouter([
  { path: "/", element: <HomeRedirect /> },
  { path: "/home", element: <HomeRedirect /> },
  { path: "/login", element: <LoginWrapper /> },
  { path: "/browse", element: <BrowseWrapper /> },
  { path: "/*", element: <Navigate to="/" /> },
]);

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
