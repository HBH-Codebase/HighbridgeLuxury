import Footer from "@/components/Footer/Footer"
import Topbar from "../components/Topbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="w-full border">
      <header className="flex-between py-2 px-4 w-full overflow-hidden bg-gray-50/5 rounded-sm">
        <Topbar />
      </header>

      <main className="w-full flex flex-col justify-center items-center">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default RootLayout
