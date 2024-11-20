import { NavLink, useLocation } from "react-router-dom";
import { NavLinks } from "../constants";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu3Line } from "react-icons/ri";

const Topbar = () => {
  const isActive = useLocation().pathname;

  return (
    <>
      <div className="w-full px-6 lg:px-12 mx-auto flex-between items-center xl:gap-[100px]">
        <NavLink to="/" className="hidden lg:block w-40 h-24 p-2">
          <img
            src="/assets/logos/Logo.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </NavLink>
        <ul className="hidden lg:flex-center flex-1 gap-3 lg:gap-6 xl:gap-10">
          {NavLinks.map((item, idx) => {
            return (
              <li
                key={item.label + idx}
                className="text-center text-primary-text"
              >
                <NavLink
                  to={item.path}
                  className={`text-base text-nowrap xl:text-lg ${
                    isActive === item.path
                      ? "font-bold text-white border-b-2 border-white"
                      : "font-normal"
                  } p-3 hover:text-white hover:font-semibold hover:border-b-2 border-white transition-all`}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Button
          className="rounded-md bg-primary border-none hidden lg:flex-center "
          asChild
        >
          <a
            href="#contact-us"
            className="text-secondary hover:text-white text-base lg:text-lg text-center"
          >
            Contact Us
          </a>
        </Button>
      </div>
      <div className="px-6 lg:hidden flex-between items-center relative">
        <NavLink to="/" className="w-32 h-24 p-2">
          <img
            src="/assets/logos/Logo.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </NavLink>
        <Sheet>
          <SheetTrigger>
            <RiMenu3Line size={32} color="white" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="outline-none w-full">
                  "
                  <NavLink to="/">
                    <img
                      src="/assets/logos/Logo.png"
                      alt="logo"
                      className="w-32 h-10"
                      width={44}
                      height={44}
                    />
                  </NavLink>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="lg:hidden flex flex-col">
              <ul className="mt-20 mb-44">
                {NavLinks.map((item, idx) => {
                  return (
                    <li
                      key={item.label + idx}
                      className="flex-1 w-full text-left my-6"
                    >
                      <SheetClose asChild>
                        <NavLink
                          to={item.path}
                          className={`text-xl text-white ${
                            isActive === item.path ? "font-bold" : "font-normal"
                          }`}
                        >
                          {item.label}
                        </NavLink>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
              <Button
                variant="outline"
                className="w-[60%] mt-24 rounded-md bg-primary border-none outline-none flex-center px-12"
                asChild
              >
                <a
                  href="#contact-us"
                  className="text-secondary text-xl"
                  scroll-behavior="smooth"
                >
                  Contact Us
                </a>
              </Button>
            </div>
            <SheetFooter>
              <div className="w-full absolute bottom-5 right-5">
                <SheetClose asChild></SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Topbar;
