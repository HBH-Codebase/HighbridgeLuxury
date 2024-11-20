import { BsArrowUp } from "react-icons/bs";
import { Button } from "../ui/button";
import { HashLink } from "react-router-hash-link";

const GoToTop = () => {
  return (
    <Button
      className="w-10 h-10  rounded-full shadow-lg shadow-gray-800 fixed bottom-[110px] border border-primary left-12 md:left-14 lg:left-[88px] flex-center p-1 bg-primary hover:scale-105 transition-all "
      asChild
    >
      <HashLink to="#top" smooth>
        <BsArrowUp size={24} color="white" />
      </HashLink>
    </Button>
  );
};

export default GoToTop;
