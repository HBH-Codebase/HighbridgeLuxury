import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import SocialMedia from "../shared/SocialMedia"

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center rounded-md pb-20'>
      <div className='w-[80%] md:w-[60%] max-w-[600px] z-10 bg-secondary-text px-6 -mt-24 py-10 rounded-lg'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-background tracking-wide text-center'>Subscribe Our Newsletter</h1>
        <div className="flex items-center gap-2 mt-5">
          <Input type="text" placeholder="Enter your email..." className="w-full text-primary-text bg-background outline-none border-none italic"/>
          <Button className="bg-primary outline-none rounded-lg text-primary-text border-none">Send</Button>
        </div>
      </div>
      <div className="w-full px-10 lg:container my-10 md:my-20 md:flex justify-start items-start gap-6">
        <div className="w-full md:w-60 flex-1 mb-10 md:mb-0">
          <img
            src="/assets/logos/home1.jpg"
            alt="logo"
            className="h-12 w-50"
          />
          <div className="flex flex-col justify-center items-start mt-3 gap-1">
            <address className="text-xs text-primary-text">KM 34 A&M Complex, Lekki-Epe Expressway, Oribanwa, Lagos</address>
            <a href="mailto:info@highbridgeluxury.com" className="text-xs text-secondary-text">email: info@highbrideluxury.com</a>
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="text-base lg:text-lg text-primary-text font-semibold tracking-wider leading-3">Useful Links</h1>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Lands</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Commercial property</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Apartments buildings</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Industrial property</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Agricultural property</Link>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="text-base lg:text-lg text-primary-text font-semibold tracking-wider leading-3">About</h1>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">About Us</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">How it Works</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Contact Us</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Our Blog</Link>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="text-base lg:text-lg text-primary-text font-semibold tracking-wider leading-3">Terms</h1>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Privacy Policy</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Terms & Conditions</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Copyright Privacy</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:texttext-secondary transition-all">Security</Link>
        </div>
      </div>
      <hr className="border bordertext-secondary w-full" />
      <SocialMedia direction="horizontal" />
      <div className="">
        <address className="text-secondary-text text-xs md:text-base">Copyright since 2024. All rights reserved.</address>
      </div>
    </div>
  )
}

export default Footer
