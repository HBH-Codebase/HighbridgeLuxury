import LandLordSteps from "../shared/LandLordSteps";

const HowToBecomeALandlord = () => {
  return (
    <section className="w-full px-10 lg:px-16 xl:wrapper py-20">
      <h3 className="text-3xl font-bold text-center gradient-text">
        Happy Clients
      </h3>
      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-6 gap-10 md:gap-4 overflow-hidden">
        <div className="w-64 h-96 rounded-md overflow-hidden">
          <img
            src="/assets/client1.jpg"
            alt="happy client"
            width={64}
            height={96}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-64 h-96 rounded-md overflow-hidden">
          <img
            src="/assets/client2.jpg"
            alt="happy client"
            width={64}
            height={96}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-64 h-96 rounded-md overflow-hidden">
          <img
            src="/assets/client3.jpg"
            alt="happy client"
            width={64}
            height={96}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-start flex-row flex-wrap mt-6">
        <LandLordSteps
          step="1"
          text="Reach out to us on any of our call lines, or follow us on social media"
        />
        <LandLordSteps
          step="2"
          text="Inquire about our beautiful properties in the market and book an inspection"
        />
        <LandLordSteps
          step="3"
          text="Visit the site with our in house inspection team of vibrant young people who will answer any questions you might have"
        />
        <LandLordSteps
          step="4"
          text="Do your due diligence: Request a subscription form/FAQ to understand the payment plans and other information you might need"
        />
        <LandLordSteps
          step="5"
          text="Make payment for your property and get an allocation within a few weeks after payment confirmation."
        />
      </div>
    </section>
  );
};

export default HowToBecomeALandlord;
