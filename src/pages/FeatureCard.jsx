import {
  faChildren,
  faCircleArrowDown,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { featureCardLang } from "../i18n";

const FeatureCard = () => {
  const langKey = useSelector((store) => store.config?.lang);

  const features = [
    {
      title: featureCardLang[langKey].title1,
      description: featureCardLang[langKey].description1,
      icon: <FontAwesomeIcon icon={faTv} />,
    },
    {
      title: featureCardLang[langKey].title2,
      description: featureCardLang[langKey].description2,
      icon: <FontAwesomeIcon icon={faCircleArrowDown} />,
    },
    {
      title: featureCardLang[langKey].title3,
      description: featureCardLang[langKey].description3,
      icon: "🔭",
    },
    {
      title: featureCardLang[langKey].title4,
      description: featureCardLang[langKey].description4,
      icon: <FontAwesomeIcon icon={faChildren} />,
    },
  ];
  return (
    <div className="bg-black text-white py-4 px-48">
      <h2 className="text-xl md:text-2xl font-bold mb-5 ">
        {featureCardLang[langKey].moreReasons}
      </h2>
      <div className="grid gap-4 md:grid-cols-4 text-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col justify-between h-80 bg-gradient-to-b from-[#2d0b52] to-[#350220] rounded-lg p-6 hover:scale-105 transition-transform duration-300 text-left "
          >
            <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
            <p className="text-md text-gray-300  ">{f.description}</p>
            <div className="text-5xl text-right mt-auto">{f.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
