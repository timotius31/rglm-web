import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="pt-24">

      <section className="relative h-[110vh] bg-black text-white flex items-center justify-center overflow-hidden">
        <div
          className="
            absolute inset-0
            bg-[url('/images/register.png')]
            bg-cover
            bg-top
          "
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="text-5xl font-bold">STAR GENERATION</h1>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          to="/register/individual"
          className="h-56 md:h-64 flex items-center justify-center"
        >
          <h2 className="text-2xl font-bold">PERSONAL</h2>
        </Link>

        <Link
          to="/register/group"
          className="h-56 md:h-64 flex items-center justify-center"
        >
          <h2 className="text-2xl font-bold">GROUP</h2>
        </Link>
      </section>

    </div>
  )
}
