import BuyToFlipReward from "../shared/BuyToFlipReward";
import { Button } from "../ui/button";

const BuyToFlip = () => {
  return (
    <>
      <div className="p-10 lg:px-20 gradient-bar mt-20">
        <div className="w-full xl:wrapper flex-between flex-col lg:flex-row ">
          <div className="flex justify-start items-start flex-col mb-10 lg:mb-0 lg:mr-10">
            <h1 className="text-sm md:text-md lg:text-lg text-center lg:text-left font-semibold mb-3 w-full">
              Invest your funds with Highbridge Luxury Development
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left font-bold">
              Earn up to 40% return on your investment in 12 months with our
              Buy2Flip plan
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Button
              variant="outline"
              className="px-10 py-5 bg-primary text-base leading-10 border-none outline-none text-primary-text rounded-full"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <BuyToFlipReward />
    </>
  );
};

export default BuyToFlip;
