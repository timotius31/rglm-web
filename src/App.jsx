import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Register from "./pages/Register"
import TicketIndividual from "./pages/TicketIndividual"
import TicketGroup from "./pages/TicketGroup"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/individual" element={<TicketIndividual />} />
        <Route path="/register/group" element={<TicketGroup />} />
      </Routes>
    </Layout>
  )
}
