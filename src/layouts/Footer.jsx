import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SUPPORTED_LANGUAGES } from "../utilities/constants";
import { changeLanguage } from "../stores/configSlice";
import { useDispatch } from "react-redux";

const footerLinks = [
  ["FAQ", "Cookie Preferences"],
  ["Help Centre", "Corporate Information"],
  ["Terms of Use"],
  ["Privacy"],
];

const Footer = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <footer className="bg-black text-gray-400 px-8 md:px-48 py-12 text-sm border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <p className="mb-8 text-lg">
          Questions? Call{" "} 
          <a href="tel:000-800-919-1743" className="underline">
            000-800-919-1743
          </a>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((col, colIdx) => (
            <div key={colIdx} className="space-y-2">
              {col.map((link, linkIdx) => (
                <a
                  key={linkIdx}
                  href="#"
                  className="block hover:underline text-md"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="relative w-fit">
          <FontAwesomeIcon
            icon={faLanguage}
            className="text-white text-lg absolute left-3 top-1/2 -translate-y-1/2 z-10"
          />
          <select
            className="appearance-none pl-10 pr-8 py-1 text-md font-semibold bg-black/30 text-white border border-gray-500 rounded focus:ring-2 focus:ring-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="text-black bg-white"
              >
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
