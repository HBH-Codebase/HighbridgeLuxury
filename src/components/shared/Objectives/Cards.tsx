import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";

interface IObjectiveCard {
  icon: React.ReactElement;
  header: string;
  content: string
}

const Cards = ({ icon , header, content }: IObjectiveCard) => {
  return (
    <div className="w-60 lg:w-72 p-3 flex flex-col gap-3 border bg-white rounded-md">
      <div className="flex flex-col gap-3">
        <div className="w-10 px-2 py-3 flex justify-center items-center bg-[#EFDE6B] rounded-sm">
          {icon}
        </div>
        <h1 className="text-sm font-bold leading-6 tracking-wide">
          {header}
        </h1>
      </div>
      <hr />
      <p className="text-xs text-gray-400 line-clamp-3">
        {content}
      </p>
      <Button variant="outline" className="w-10 p-2 flex justify-center items-center rounded-full border mt-4">
        <FaAngleRight />
      </Button>
    </div>
  )
}

export default Cards
