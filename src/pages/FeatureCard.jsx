import {
  faChildren,
  faCircleArrowDown,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: <FontAwesomeIcon icon={faTv} />,
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: <FontAwesomeIcon icon={faCircleArrowDown} />,
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: "🔭",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: <FontAwesomeIcon icon={faChildren} />,
  },
];

const FeatureCard = () => {
  return (
    <div className="bg-black text-white py-4 px-48">
      <h2 className="text-xl md:text-2xl font-bold mb-5 ">
        More reasons to join
      </h2>
      <div className="grid gap-4 md:grid-cols-4 text-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col justify-between h-80 bg-gradient-to-b from-[#2d0b52] to-[#350220] rounded-lg p-6 hover:scale-105 transition-transform duration-300 text-left "
          >
            <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
            <p className="text-md text-gray-300  ">
              {f.description}
            </p>
            <div className="text-5xl text-right mt-auto">{f.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
