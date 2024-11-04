import CoverImg from "../../../../assets/Retaurant-img/cover-img.png";
import StarImg from "../../../../assets/logo/Vector.png";

const Hero = () => {
  return (
    <div className="hero lg:py-[70px] py-[32px]">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="lg:-ms-32 relative ">
          <div>
            <img
              src={CoverImg}
              className="w-[700px] shadow-2xl relative z-10"
              alt="Cover"
            />

            <img
              src={StarImg}
              className="w-[45px] h-[45px] absolute lg:-top-[30px] lg:-right-[30px] -top-6 -right-0"
              alt="Cover"
            />
          </div>

          <div className="absolute lg:bottom-0 bottom-2 lg:-right-[50px] right-2 w-[120px] h-[120px] flex justify-center items-center bg-[#FEBF00] rounded-[75.472px] z-40">
            <div className="w-[105.66px] h-[105.66px] flex justify-center items-center bg-[#FEBF00]  border-2 border-dashed border-red-500 rounded-[75.472px]">
              <p className="w-[69px] h-[72px] text-[30px] text-center leading-[36px] flex justify-center items-center font-medium font-bebas">
                TODAY OFFER
              </p>
            </div>
          </div>
        </div>
        <div className="z-10">
          <p className=" lg:text-[5rem] text-[3rem] lg:leading-[100px] font-bold font-bebas text-white bg-[rgba(189,31,23,0.5)] my-2">
            TASTE THE AUTHENTIC SAUDI CUISINE
          </p>
          <p className="w-[22rem] text-white font-roboto py-2">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="bg-[#FEBF00] px-[24px] py-[10px] font-roboto rounded-none mt-6 mb-6">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
