import Carousel from "@/components/shared/Carousel";

const Gallery = () => {
  return (
    <div className="w-full bg-white rounded-xl px-6 py-5 my-4">
      <h2 className="text-sm font-bold text-gray-800">Gallery</h2>
      <div className="flex flex-wrap gap-10 mt-4 pb-10">
        <Carousel
          items={[
            "gallery1.JPG",
            "gallery2.JPG",
            "gallery3.JPG",
            "gallery4.JPG",
            "gallery5.JPG",
            "gallery6.JPG",
          ]}
        />
      </div>
    </div>
  );
};

export default Gallery;
