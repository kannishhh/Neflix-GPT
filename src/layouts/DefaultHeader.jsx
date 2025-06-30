import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utilities/constants";
import { changeLanguage } from "../stores/configSLice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { homeLang } from "../i18n";

const DefaultHeader = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full px-4 md:px-36 py-1 top-0 left-0 absolute z-50 flex justify-between items-center bg-gradient-to-b from-black">
      {isHomePage ? (
        <img src={LOGO_URL} alt="logo" className="w-44 md:w-52" />
      ) : (
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="logo"
            className="w-44 md:w-52 cursor-pointer"
          />
        </Link>
      )}

      {!isLoginPage && (
        <div className="flex items-center gap-4">
          <div className="relative">
            <FontAwesomeIcon
              icon={faLanguage}
              className="text-white text-lg absolute left-3 top-1/2 -translate-y-1/2 z-10"
            />

            <select
              value={langKey} 
              className="apperance-none pl-10 pr-6 py-2 text-md font-semibold outline-none bg-black/30 text-white border border-gray-500 rounded-md px-1  focus:ring-2 focus:ring-white "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-black bg-white font-md text-lg"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <Link to="/login">
            <button className="px-4 py-2 bg-red-600 text-white font-semibold text-md rounded-md hover:bg-red-700 cursor-pointer">
              {homeLang[langKey].signIn}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DefaultHeader;
