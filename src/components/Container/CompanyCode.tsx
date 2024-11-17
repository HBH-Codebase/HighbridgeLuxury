import LuxuryCodes from "../shared/LuxuryCodes";

const CompanyCode = () => {
  return (
    <>
      <div className="w-full px-6 lg:px-10 xl:w-3/4 mx-auto h-32  flex flex-wrap lg:flex-row justify-evenly mt-3">
        <LuxuryCodes topic="Integrity" />
        <LuxuryCodes topic="Innovation" />
        <LuxuryCodes topic="Professionalism" />
        <LuxuryCodes topic="Intelligence" />
      </div>
    </>
  );
};

export default CompanyCode;
