import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utilities/constants";
import { changeLanguage } from "../stores/configSLice";

const footerLinks = [
  ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
  ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
  ["Media Centre", "Terms of Use", "Contact Us"],
];

const DefaultFooter = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <footer className="bg-black text-gray-400 px-48 py-12 text-sm">
      <div className="max-w-6xl">
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
                  href=""
                  className="block hover:underline text-md font-base"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="relative ">
          <FontAwesomeIcon
            icon={faLanguage}
            className="text-white text-lg absolute left-3 top-1/2 -translate-y-1/2 z-10"
          />
          <select
            className="apperance-none pl-10 pr-8 py-1 text-md font-semibold outline-none bg-black/30 text-white border border-gray-500 rounded focus:ring-2 focus:ring-white "
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

        <p className="text-3xl b-10 mt-8 p-1 px-2 text-white font-extrabold bg-red-800 w-2/9">Netflix India</p>
      </div>
    </footer>
  );
};

export default DefaultFooter;
