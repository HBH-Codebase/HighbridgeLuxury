import LandMarks from "@/components/shared/LandMarks";

const Landmarks = () => {
  return (
    <div className="w-full bg-white rounded-xl px-6 py-5 my-4">
      <h2 className="text-sm font-bold text-gray-800">Landmarks</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        <LandMarks landmark="landmarks2.jpg" />
        <LandMarks landmark="landmarks3.jpg" />
        <LandMarks landmark="landmarks4.jpg" />
        <LandMarks landmark="landmarks5.jpg" />
      </div>
    </div>
  );
};

export default Landmarks;
