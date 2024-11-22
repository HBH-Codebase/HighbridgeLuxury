const LandMarks = ({ landmark }: { landmark: string }) => {
  return (
    <div className="w-full md:w-40 flex flex-col rounded-md">
      <img
        src={`/assets/${landmark}`}
        alt="landmark"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LandMarks;
