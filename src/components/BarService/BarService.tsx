const BarService = ({title, content}: {title: string; content: string}) => {
  return (
    <div className="w-full flex justify-between items-start mb-6">
      <div className="w-1/3 flex justify-between items-start gap-2 flex-col">
        <h1 className="header-text text-primary">{title}</h1>
        <div className="gradient-bar px-7 py-1 rounded-xl"/>
      </div>
      <div className="w-2/3">
        <p className="text-primary-text text-sm md:text-base">{content}</p>
      </div>
    </div>
  )
}

export default BarService
