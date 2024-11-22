const Gallery = () => {
  return (
    <div className="w-full bg-white rounded-xl px-6 py-5 my-4">
      <h2 className="text-sm font-bold text-gray-800">Gallery</h2>
      <div className="flex flex-wrap gap-10 mt-4 pb-10">
        <div className="w-full md:w-1/4">
          <img
            src="/assets/gallery1.JPG"
            alt="gallery1"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/4">
          <img
            src="/assets/gallery2.JPG"
            alt="gallery1"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/4">
          <img
            src="/assets/gallery3.JPG"
            alt="gallery1"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/4">
          <img
            src="/assets/gallery4.JPG"
            alt="gallery1"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/4">
          <img
            src="/assets/gallery5.JPG"
            alt="gallery1"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/4">
          <img
            src="/assets/gallery6.JPG"
            alt="gallery1"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
