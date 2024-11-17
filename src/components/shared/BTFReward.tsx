const BTFReward = ({ text, desc }: { text: string; desc: string }) => {
  return (
    <div className="w-full md:w-1/4 flex items-center flex-col gap-2">
      <div className="w-10 h-10 bg-gray-700 rounded-full mb-2" />
      <h3 className="text-base font-semibold text-center">{text}</h3>
      <p className="text-xs font-light">{desc}</p>
    </div>
  );
};

export default BTFReward;
