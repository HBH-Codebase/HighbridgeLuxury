import Carousel from "@/components/shared/Carousel";

const Landmarks = () => {
  return (
    <div className="w-full bg-white rounded-xl px-6 py-10 my-4">
      <h2 className="text-sm font-bold text-gray-800">LANDMARKS</h2>
      <div className="flex flex-wrap gap-4 mt-10 o">
        <Carousel
          items={[
            "landmarks1.jpg",
            "landmarks3.jpg",
            "landmarks4.jpg",
            "landmarks5.jpg",
          ]}
        />
      </div>
    </div>
  );
};

export default Landmarks;
