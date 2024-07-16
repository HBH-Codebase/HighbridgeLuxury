import OurServices from "@/components/OurServices/OurServices"
import HeroSection from "../../components/HeroSection/HeroSection"
import Mission from "../../components/Mission/Mission"
import Project from "../Projects/Project"
import OurProducts from "@/components/OurProducts/OurProducts"
import Testimonials from "@/components/Testimonials/Testimonials"
import Blog from "@/components/Blog/Blog"
import SEO from "@/components/SEO/SEO"
 
const Home = () => {
  return (
    <>
    <SEO
      name="Highbridge Luxury Development Limited"
      title="Home | Affordable Luxury Apartments In Lagos - Call us Now"
      description="Highbridge Luxury Development Limited is committed to building your dream home. We build, buy and sell landed properties"
      type="article"
    />
    <section className='relative w-full'>
      <HeroSection />
    </section>
    
    <section className="w-full flex justify-center items-center py-40 bg-slate-100">
      <Mission />
    </section>

    <section className="bg-gray-50 w-full">
      <Project />
    </section>

    <section className="w-full flex justify-center items-center bg-slate-100 py-40">
      <OurServices />
    </section>

    <section className="w-full py-40 flex justify-center items-center">
      <OurProducts />
    </section>

    <section className="w-full py-40 flex flex-col justify-center items-center">
      <Testimonials />
    </section>
    
    <section className="w-full py-40 flex flex-col justify-center items-center bg-slate-100">
      <Blog />
    </section>
    </>
  )
}

export default Home
