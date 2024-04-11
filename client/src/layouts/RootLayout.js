import Navigation from "../components/Navigation"
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"

export default function RootLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}