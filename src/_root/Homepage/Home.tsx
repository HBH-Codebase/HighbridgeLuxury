import HeroSection from "../../components/HeroSection/HeroSection"
import Mission from "../../components/Mission/Mission"
import Project from "../Projects/Project"
 
const Home = () => {
  return (
    <>
    <section className='relative w-full'>
      <HeroSection />
    </section>
    
    <section className="w-full flex justify-center items-center py-10 bg-gray-100">
      <Mission />
    </section>

    <section className="bg-gray-50 w-full">
      <Project />
    </section>

    <section className="w-full">
    </section>
    </>
  )
}

export default Home
