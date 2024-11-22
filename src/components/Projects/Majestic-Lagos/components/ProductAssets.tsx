const ProductAssets = () => {
  return (
    <div className="w-full xl:wrapper flex flex-col lg:flex-row gap-3">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Lc4h8rZCAL0?si=-_OBltkt76yjlBIf"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3">
        <div className="w-full h-1/2">
          <img
            src="/assets/photo1.JPG"
            alt="Majestic Lagos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-1/2">
          <img
            src="/assets/photo2.JPG"
            alt="Majestic Lagos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductAssets;
