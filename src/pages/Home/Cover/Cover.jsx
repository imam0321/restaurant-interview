import CoverBg from "../../../assets/logo/Rectangle 4.png";
import Navbar from "../../Share/Navbar/Navbar";

const Cover = () => {
  return (
    <div
      style={{ backgroundImage: `url(${CoverBg})` }}
      className="bg-cover bg-center bg-red-600 h-screen"
    >
      <Navbar/>
    </div>
  );
};

export default Cover;