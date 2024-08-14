import { Link, NavLink, useLocation } from "react-router-dom"
import { NavLinks } from "../constants"
import { Button } from "./ui/button";

import logo from "/assets/logos/home1.jpg";
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
import { RiMenu3Line } from "react-icons/ri";


const Topbar = () => {
  const isActive = useLocation().pathname;
  
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex-between gap-10">
          <NavLink to="/" className='w-16 h-16 rounded-full'>
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </NavLink>
          <ul className="hidden lg:flex-between">
            {NavLinks.map((item, idx) => {
              return (
                <li key={item.label + idx} className="flex-1 w-36 text-center text-xl text-primary-text">
                  <NavLink to={item.path} className={`text-md ${isActive === item.path ? 'font-bold text-white' : 'font-normal'} hover:text-white hover:font-semibold transition-all`}>
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <Button className="rounded-md bg-primary border-none hidden lg:flex-center " asChild>
          <Link to="/contact-us" className="text-secondary hover:text-white text-xl text-center">
            Contact Us
          </Link>
        </Button>
      </div>
      <div className="lg:hidden flex-center flex-col relative">
        <Sheet>
          <SheetTrigger>
            <RiMenu3Line size={32} color="white" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="outline-none">
                  <NavLink to="/">
                    <img
                      src={logo}
                      alt="logo"
                      className="object-contain rounded-full"
                      width={44}
                      height={44}
                    />
                  </NavLink>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="lg:hidden flex flex-col">
              <ul className="mt-10">
                {NavLinks.map((item, idx) => {
                  return (
                    <li key={item.label + idx} className="flex-1 w-full text-left my-6">
                      <SheetClose asChild>
                        <NavLink to={item.path} className={`text-xl text-white ${isActive === item.path ? 'font-bold' : 'font-normal'}`}>
                          {item.label}
                        </NavLink>
                      </SheetClose>
                    </li>
                  )
                })}
              </ul>
              <Button variant="outline" className="w-[60%] mt-24 rounded-md bg-primary border-none outline-none flex-center px-12" asChild>
                <Link to="/contact-us" className="text-secondary text-xl">
                  Contact Us
                </Link>
              </Button>
            </div>
            <SheetFooter>
              <div className="w-full absolute bottom-5 right-5">
                <SheetClose asChild>
                  <SocialMedia direction="horizontal" />
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default Topbar
