import { GetStarted } from "../../components/sections/GetStarted";
import { OurPartners } from "../../components/sections/OurPartners";
import { HomeWelcome } from "../../components/sections/Welcome";

const HomePage = () => {
  return (
    <div className="page-wrapper page-wrapper--home">
      <HomeWelcome />
      <OurPartners />
      <GetStarted />
    </div>
  );
};

export default HomePage;
