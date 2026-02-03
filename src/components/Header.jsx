import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleNav = (id) => {
    setOpen(false)

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/", { state: { scrollTo: id } })
    }
  }

  return (
    <header className="fixed top-0 w-full h-20 bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">rglm.</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm">
          {["home", "about", "speakers", "venue", "contact"].map(item => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className="hover:text-accent"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/register"
            className="bg-blue-600 px-4 py-2 rounded-full text-sm"
          >
            Register
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3">
          {["home", "about", "speakers", "venue", "contact"].map(item => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className="block w-full text-left"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
