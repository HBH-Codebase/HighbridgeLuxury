import { BsArrowUp } from "react-icons/bs";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      className={`${
        isVisible ? "fixed" : "hidden"
      } w-10 h-10  rounded-full shadow-lg shadow-gray-800 bottom-[110px] border border-primary left-12 md:left-14 lg:left-[88px] flex-center p-1 bg-primary hover:scale-105 transition-all`}
      asChild
    >
      <a href="#top">
        <BsArrowUp size={24} color="white" />
      </a>
    </Button>
  );
};

export default GoToTop;
