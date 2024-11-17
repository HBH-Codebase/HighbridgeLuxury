const LuxuryCodes = ({ topic }: { topic: string }) => {
  return (
    <div className="flex justify-center items-center gap-1 lg:gap-3">
      <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-secondary-text" />
      <div className="flex-center">
        <h3 className="text-sm lg:text-base font-bold text-gray-100">
          {topic}
        </h3>
      </div>
    </div>
  );
};

export default LuxuryCodes;
