import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
          alt="Background_logo"
        />
      </div>
      {/* <div className="absolute">
        <select className="absolute">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button>Sign In</button>
      </div> */}
    </div>
  );
};

export default Home;
