import DeliveryLogo from "../../../assets/logo/bag.png";
import DiningLogo from "../../../assets/logo/medal.png";
import PickupLogo from "../../../assets/logo/package.png";

const Delivery = () => {
  return (
    <>
      {/* Delivery */}
      <div className="flex lg:flex-row lg:justify-between lg:items-center flex-col items-start lg:my-[60px] lg:mx-2 mx-4 my-10 gap-6">
        <div className="flex justify-center items-center gap-8">
          <img
            src={DeliveryLogo}
            className="lg:w-[30px] lg:h-[30px]"
            alt="Delivery Logo"
          />
          <div>
            <h2 className="text-[1.4rem] font-bebas">FAST DELIVERY</h2>
            <p>Within 30 minutes</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <img
            src={DiningLogo}
            className="lg:w-[30px] lg:h-[30px]"
            alt="Delivery Logo"
          />
          <div>
            <h2 className="text-[1.4rem] font-bebas">ABSOLUTE DINING</h2>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <img
            src={PickupLogo}
            className="lg:w-[30px] lg:h-[30px]"
            alt="Delivery Logo"
          />
          <div>
            <h2 className="text-[1.4rem] font-bebas">PICKUP DELIVERY</h2>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
