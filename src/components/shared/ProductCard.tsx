const ProductCard = () => {
  return (
    <div className="w-full md:w-72 flex-between flex-col gap-4 mt-8 group relative">
      <div className="w-full h-auto overflow-hidden">
        <img
          src="/assets/luxuryFlyer.jpg"
          alt="majestic lagos"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductCard;
