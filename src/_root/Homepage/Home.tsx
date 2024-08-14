import OurServices from "@/components/OurServices/OurServices"
import HeroSection from "../../components/HeroSection/HeroSection"
import Mission from "../../components/Mission/Mission"
import Project from "../Projects/Project"
import OurProducts from "@/components/OurProducts/OurProducts"
import Testimonials from "@/components/Testimonials/Testimonials"
import Blog from "@/components/Blog/Blog"
import SEO from "@/components/SEO/SEO"
import Numbers from "@/components/Numbers/Numbers"
 
const Home = () => {
  return (
    <>
      <SEO
        name="Highbridge Luxury Development Limited"
        title="Home | Affordable Luxury Apartments In Lagos - Call us Now"
        description="Highbridge Luxury Development Limited is committed to building your dream home. We build, buy and sell landed properties"
        type="article"
      />
      <section className="gradient-bg">
        <HeroSection />
      </section>

      <Numbers />
      <Mission />
      <Project />
      <OurServices />
      <OurProducts />
      <Testimonials />
      <Blog />
    </>
  )
}

export default Home
