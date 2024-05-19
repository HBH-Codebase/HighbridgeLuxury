import { Link, NavLink, useLocation } from "react-router-dom"
import { NavLinks } from "../constants"
import { Button } from "./ui/button"
import { FaHamburger } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SocialMedia from "./shared/SocialMedia";


const Topbar = () => {
  const isActive = useLocation().pathname;
  
  return (
    <section className="w-full flex justify-between px-6">
      <div className="w-full flex justify-between items-center">
        <div className="outline-none">
          <NavLink to="/">
            <img
              src="/assets/hbLogobar.png"
              alt="logo"
              className="object-contain"
              width={160}
              />
          </NavLink>
        </div>
        <div className="hidden lg:block">
          <ul className="flex-between">
            {NavLinks.map((item, idx) => {
              return (
                <li key={item.label + idx} className="flex-1 w-32">
                  <NavLink to={item.path} className={`text-md text-gray-600 ${isActive === item.path ? 'font-bold' : 'font-normal'} hover:text-black hover:font-semibold transition-all`}>
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <Button variant="outline" className="rounded-md bg-[#5D0265] hover:bg-[#5D0265]/75 hidden lg:block" asChild>
          <Link to="/contact-us" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
        </Button>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Button variant="outline">
              <FaHamburger size={16} color="#5D0265" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="outline-none w-full pt-20">
                  <NavLink to="/">
                    <img
                      src="/assets/hbLogobar.png"
                      alt="logo"
                      className="object-contain"
                      width={160}
                      />
                  </NavLink>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="lg:hidden flex flex-col items-between justify-center">
              <ul className="mt-10">
                {NavLinks.map((item, idx) => {
                  return (
                    <li key={item.label + idx} className="flex-1 w-full text-center my-6">
                      <SheetClose asChild>
                        <NavLink to={item.path} className={`text-md text-gray-600 ${isActive === item.path ? 'font-bold' : 'font-normal'} hover:text-black hover:font-semibold transition-all`}>
                          {item.label}
                        </NavLink>
                      </SheetClose>
                    </li>
                  )
                })}
              </ul>
              <Button variant="outline" className="w-[60%] mx-auto rounded-md bg-[#5D0265] hover:bg-[#5D0265]/75" asChild>
                <Link to="/contact-us" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </Button>
            </div>
            <SheetFooter>
              <div className="w-full mt-10">
                <SheetClose asChild>
                  <SocialMedia direction="horizontal" />
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  )
}

export default Topbar
