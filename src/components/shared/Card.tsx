import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaArrowRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

export function CardComponent({ id, icon, heading, content }: { id: number, icon?: React.ReactNode, heading: string | undefined, content: string}) {
  return (
    <Card className="w-[180ox] md:w-[170px] lg:w-[200px] bg-primary-text outline-none border-none group hover:bg-primary transition-all shadow-xl">
      <CardHeader>
        <CardTitle className="text-gray-800 text-md font-bold transition-all">
          <div className=" flex justify-center items-center w-8 h-8 rounded-lg bg-transparent mb-1 transition-all">
            {icon}
          </div>
          0{id}. {heading}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 text-[9px] leading-3 tracking-tight group-hover:text-gray-50 font-semibold transition-all">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="link" className="text-[#5D0265] font-bold text-sm md:text-md group-hover:text-gray-50 transition-all" asChild>
          <Link to="#">
            Read more <FaArrowRight className="fill-[#5D0265] hover:fill-[#720376] ml-6 group-hover:fill-gray-50 transition-all" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
