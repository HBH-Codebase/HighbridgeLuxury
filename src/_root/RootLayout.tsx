import Footer from "@/components/Footer/Footer"
import Topbar from "../components/Topbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className="w-full overflow-hidden bg-background">
      <header className="px-6 lg:container flex-between py-4">
        <Topbar />
      </header>

      <main className="w-full flex flex-col justify-center items-center">
        <Outlet />
      </main>

      <footer className="bg-purple-950/55">
        <Footer />
      </footer>
    </main>
  )
}

export default RootLayout
