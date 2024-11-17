import { ReactNode } from "react";

const Offering = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-background p-6 rounded-md hover:cursor-pointer hover:scale-105 transition-all">
      <div className="flex-center bg-white w-10 h-10 p-1 rounded-md">
        {icon}
      </div>
      <div className="mt-1 text-center">
        <h3 className="text-base font-bold text-secondary-text">{text}</h3>
      </div>
    </div>
  );
};

export default Offering;
