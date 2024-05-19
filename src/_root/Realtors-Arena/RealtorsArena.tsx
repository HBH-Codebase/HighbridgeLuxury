import LoginForm from "@/components/LoginForm/LoginForm"
import Topbanner from "@/components/shared/Topbanner"

const RealtorsArena = () => {
  return (
    <div className='w-full'>
      <Topbanner text="Realtors' Arena" />
      <div className="relative flex overflow-hidden">
        <div className="w-full md:basis-2/5 md:pt-24 lg:pt-32 pt-24 pb-44 px-6">
          <LoginForm />
        </div>
        <div className="hidden md:block basis-3/5 relative">
          <img
            src="/assets/aboutus.jpg"
            alt="handover keys"
            className="object-fill h-dvh outline-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5D0265]/60 from-10% to-[#EFDE6B]/10" />
        </div>
      </div>
    </div>
  )
}

export default RealtorsArena
