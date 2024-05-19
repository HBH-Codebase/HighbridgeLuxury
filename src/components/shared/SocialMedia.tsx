import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const SocialMedia = ({ direction }: { direction: string }) => {
  return (
    <div className={`flex ${direction === 'vertical' ? 'flex-col' : 'flex-row'} justify-center items-center gap-2 p-3`}>
      <Button variant="outline"asChild className="w-12 h-12 lg:w-16 lg:h-16 rounded-md bg-gray-50/20 transition-all">
        <Link to="#">
          <FaFacebook size={26} color="white" className="fill-[#5D0265]"/>
        </Link>
      </Button>
      <Button variant="outline"asChild className="w-12 h-12 lg:w-16 lg:h-16 rounded-md bg-gray-50/20 transition-all">
        <Link to="#">
          <FaTwitter size={26} color="white" className="fill-[#5D0265]"/>
        </Link>
      </Button>
      <Button variant="outline"asChild className="w-12 h-12 lg:w-16 lg:h-16 rounded-md bg-gray-50/20 transition-all">
        <Link to="#">
          <FaLinkedin size={26} color="white" className="fill-[#5D0265]"/>
        </Link>
      </Button>
      <Button variant="outline"asChild className="w-12 h-12 lg:w-16 lg:h-16 rounded-md bg-gray-50/20 transition-all">
        <Link to="#">
          <FaInstagram size={26} color="white" className="fill-[#5D0265]"/>
        </Link>
      </Button>
    </div>
  )
}

export default SocialMedia
