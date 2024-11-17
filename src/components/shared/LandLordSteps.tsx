const LandLordSteps = ({ step, text }: { step: string; text: string }) => {
  return (
    <div className="w-full md:w-1/3 flex-center flex-row md:flex-col gap-6 md:gap-2 px-4 py-2">
      <div className="w-20 h-20 rounded-full bg-background flex-center">
        <h3 className="gradient-text font-bold text-6xl">{step}</h3>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-700 font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default LandLordSteps;
