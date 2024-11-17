import { MdOutlineHomeWork } from "react-icons/md";
import Offering from "../shared/Offering";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GiChestnutLeaf } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const WhatWeOffer = () => {
  return (
    <section className="w-full xl:wrapper px-10 py-20 mx-auto">
      <h2 className="text-3xl font-bold text-center gradient-text">
        What We Offer
      </h2>
      <div className="mt-6 grid grid-cols-2 lg:flex-between gap-6 xl:gap-10">
        <Offering
          icon={<MdOutlineHomeWork size={30} />}
          text="Residential Properties"
        />
        <Offering
          icon={<HiOutlineHomeModern size={30} />}
          text="Commercial Properties"
        />
        <Offering
          icon={<GiChestnutLeaf size={30} />}
          text="Farmland Properties"
        />
        <Offering
          icon={<FaMoneyBillTrendUp size={30} />}
          text="Real Estate Investments"
        />
      </div>
    </section>
  );
};

export default WhatWeOffer;
