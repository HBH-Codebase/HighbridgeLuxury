import { CiCircleCheck } from "react-icons/ci";

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-3">
      <div className="w-full md:w-1/2 px-6 py-5 rounded-lg bg-white">
        <h3 className="text-sm font-bold tracking-wide leading-4">BENEFITS</h3>
        <p className="text-[10px] text-gray-600 my-3 tracking-wide leading-4">
          1. Prime Location: Majestic Lagos benefits from its strategic
          positioning within the Lekki Free Trade Zone area, surrounded by
          prominent commercial giants like Kellogg's Snacks, Indomie, Dano Milk,
          and several commercial banks. With the new Lekki-Epe Expressway
          providing smooth connectivity, this estate offers unparalleled access
          to industrial and urban growth centers.
        </p>
        <p className="text-[10px] text-gray-600 my-3 tracking-wide leading-4">
          2. High Return on Investment: For investors, Majestic Lagos offers the
          promise of both short-term and long-term value appreciation. The
          ongoing infrastructural projects in the region are expected to draw
          significant economic activities, resulting in increased demand for
          properties. This development ensures investors will see significant
          returns, whether they choose to sell, lease, or hold their property
          for future appreciation.
        </p>
      </div>
      <div className="w-full md:w-1/2 px-6 py-5 rounded-lg bg-white">
        <h3 className="text-sm font-bold tracking-wide leading-4">
          FACILITIES
        </h3>
        <div className="flex gap-3 items-center">
          <CiCircleCheck size={16} className="text-gray-600" />
          <p className="text-[10px] text-gray-600 my-3 tracking-wide">
            . 24/7 Security and Gated Access
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <CiCircleCheck size={16} className="text-gray-600" />
          <p className="text-[10px] text-gray-600 my-3 tracking-wide">
            . Green Spaces and Recreational Areas
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <CiCircleCheck size={16} className="text-gray-600" />
          <p className="text-[10px] text-gray-600 my-3 tracking-wide">
            Modern Infrastructure
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <CiCircleCheck size={16} className="text-gray-600" />
          <p className="text-[10px] text-gray-600 my-3 tracking-wide">
            Power Supply and Water Systems
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <CiCircleCheck size={16} className="text-gray-600" />
          <p className="text-[10px] text-gray-600 my-3 tracking-wide">
            Commercial Facilities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
