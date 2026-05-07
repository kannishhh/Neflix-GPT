import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL, SUPPORTED_LANGUAGES, AVATAR_RED } from "../utilities/constants";
import { toggleGptSearchView } from "../stores/gptSlice";
import { changeLanguage } from "../stores/configSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHouse, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user); 
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); 
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGPtSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full px-8 md:px-36 py-4 absolute z-10 flex justify-between items-center bg-gradient-to-b from-black">
      <img src={LOGO_URL} alt="logo" className="w-44 md:w-52" />
      {user && (
        <div className="relative p-2 m-2 flex items-center gap-4">
          <FontAwesomeIcon icon={faLanguage} className="text-white text-xl" />
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-700 text-white rounded"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-3 py-2 bg-purple-800 rounded text-white"
            onClick={handleGPtSearch}
          >
            {showGptSearch ? <FontAwesomeIcon icon={faHouse} /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
          </button>
          <img className="h-10 w-10 rounded-sm" src={AVATAR_RED} alt="avatar-red" />
          <button onClick={handleSignOut} className="font-bold text-white px-2">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
