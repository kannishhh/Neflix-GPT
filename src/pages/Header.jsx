import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../stores/userSlice";
import { LOGO_URL } from "../utilities/constants";
import { AVATAR_RED } from "../utilities/constants";
// import Logo from "../../logo.png";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        // console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => subscribe();
  }, []);

  return (
    <div className="w-full px-8 md:px-36 py-4 absolute z-10 flex justify-between items-center bg-gradient-to-b from-black">
      <img src={LOGO_URL} alt="logo" className="w-44 md:w-52" />
      {user && (
        <div className="flex py-2">
          <img
            className="h-10 w-10 rounded-sm"
            src={AVATAR_RED}
            alt="avatar-red"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer px-2"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
