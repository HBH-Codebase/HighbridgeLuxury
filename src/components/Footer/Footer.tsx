import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import SocialMedia from "../shared/SocialMedia"

const Footer = () => {
  return (
    <div className='bg-[#5D0265]/20 w-full flex flex-col justify-center items-center rounded-md shadow-gray-100 pb-20'>
      <div className='w-[80%] md:w-[60%] max-w-[600px] z-10 bg-white px-6 -mt-24 py-10 rounded-lg'>
        <h1 className='text-2xl lg:text-4xl font-semibold text-[#5D0265] tracking-wide text-center'>Subscribe Our Newsletter</h1>
        <div className="bg-[#5D0265] px-3 py-2  flex items-center gap-5 mt-5">
          <Input type="text" placeholder="Enter your email..." className="w-full bg-inherit text-gray-100 outline-none border-none italic"/>
          <Button className="bg-gray-100 outline-none rounded-sm text-gray-800 px-6 hover:bg-gray-200">Send</Button>
        </div>
      </div>
      <div className="w-full max-w-[80%] mx-auto my-6 md:my-20 md:flex justify-start items-start gap-6">
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="text-base font-semibold tracking-wider leading-3">Useful Links</h1>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Lands</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Commercial property</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Apartments buildings</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Industrial property</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Agricultural property</Link>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="text-md font-semibold tracking-wider leading-3">About</h1>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">About Us</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">How it Works</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Contact Us</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Our Blog</Link>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="text-md font-semibold tracking-wider leading-3">Terms</h1>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Privacy Policy</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Terms & Conditions</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Copyright Privacy</Link>
          <Link to="#" className="block text-xs font-normal text-gray-500 hover:text-gray-700 transition-all">Security</Link>
        </div>
        <div className="w-full md:w-60">
          <img
            src="/assets/hbLogobar.png"
            alt="logo"
            className="h-12 w-50"
          />
          <div className="flex flex-col justify-center items-start mt-3 gap-1 px-4">
            <address className="text-xs text-gray-500">KM 34 A&M Complex, Lekki-Epe Expressway, Oribanwa, Lagos</address>
            <a href="mailto:info@highbridgeluxury.com" className="text-xs text-gray-500">email: info@highbrideluxury.com</a>
          </div>
        </div>
      </div>
      <hr className="border border-gray-400 w-full max-w-[80%] mx-auto" />
      <SocialMedia direction="horizontal" />
      <div className="">
        <address className="text-gray-400 text-xs md:text-sm">Copyright since 2024. All rights reserved.</address>
      </div>
    </div>
  )
}

export default Footer
