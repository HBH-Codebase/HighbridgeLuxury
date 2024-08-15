import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

const SocialMedia = ({ direction }: { direction: string }) => {
  return (
    <div className={`flex ${direction === 'vertical' ? 'flex-col' : 'flex-row'} justify-center items-center gap-6 p-6`}>
      <Link to="#">
        <FaFacebook size={26} color="white" className="fill-primary-text"/>
      </Link>
      <Link to="#">
        <FaTwitter size={26} color="white" className="fill-primary-text"/>
      </Link>
      <Link to="#">
        <FaLinkedin size={26} color="white" className="fill-primary-text"/>
      </Link>
      <Link to="#">
        <FaInstagram size={26} color="white" className="fill-primary-text"/>
      </Link>
    </div>
  )
}

export default SocialMedia
