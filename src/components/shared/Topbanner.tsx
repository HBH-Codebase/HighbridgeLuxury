const Topbanner = ({text}: {text:string}) => {
  return (
    <div className="about">
      <div className="absolute inset-0 bg-[#5D0265]/70" />
      <div className="absolute flex justify-center md:justify-start items-center md:items-end gap-3 inset-0 md:pb-10 md:pl-20">
        <h1 className="text-xl md:text-[26px] lg:text-[40px] font-semibold leading-6 tracking-tight text-gray-300">
          {text}
        </h1>
      </div>
    </div>
  )
}

export default Topbanner;
