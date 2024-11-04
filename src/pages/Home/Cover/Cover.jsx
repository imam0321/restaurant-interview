import CoverBg from "../../../assets/logo/Rectangle 4.png";
import Navbar from "../../Share/Navbar/Navbar";
import Hero from "./Hero/Hero";

const Cover = () => {
  return (
    <div
      style={{ backgroundImage: `url(${CoverBg})` }}
      className="bg-cover bg-center bg-no-repeat bg-red-700 min-w-fit lg:px-[200px] px-8"
    >
      <Navbar />
      <Hero></Hero>
    </div>
  );
};

export default Cover;
