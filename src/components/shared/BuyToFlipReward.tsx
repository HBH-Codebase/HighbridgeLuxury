import BTFReward from "./BTFReward";

const BuyToFlipReward = () => {
  return (
    <section className="mt-10 px-10 lg:px-20">
      <h3 className="text-2xl font-semibold text-center">
        When You Invest In Buy To Flip, You get...
      </h3>
      <div className="w-full md:flex flex-col md:flex-row justify-center gap-10 place-content-start mt-10">
        <BTFReward
          text="Receipt Of Payment"
          desc="This is a document that shows the amount you have invest alongside your other information like full name, addresss and others"
        />
        <BTFReward
          text="Contract Of Sales"
          desc="This is a binding document between in investor and the company showing that we have agreed to pay you the stipulated amount and 40% interest after the contract period."
        />
        <BTFReward
          text="Acknowledgement Letter"
          desc="This document is to acknowledge the agreement between both parties legally."
        />
        <BTFReward
          text="Postdated Cheque"
          desc="This is a cheque bearing the investors full name and the total amount to be withdrawn after the investment period is stipulated. Note that this cheque can only be cashed out after the investment period has elapsed."
        />
      </div>
    </section>
  );
};

export default BuyToFlipReward;
