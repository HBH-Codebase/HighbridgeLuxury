const SectionHeading = ({ text }: { text: string}) => {
  return (
    <div className="w-full flex items-center mb-6">
      <hr className="border-[#EFDE6B] border-2 w-3 mr-2" /> <h2 className="text-[#EFDE6B] text-base md:text-lg font-bold tracking-tight">{text}</h2>
    </div>
  )
}

export default SectionHeading;
