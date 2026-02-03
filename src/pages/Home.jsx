import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const speakers = [
  {
    name: "Ps. Daniel Wirawan",
    photo: "/images/speakers/psdaniel.jpeg",
    bio: "Ps. Daniel Wirawan adalah perintis Gereja Kemuliaan Sion yang memulai pelayanannya pada tahun 2010 dengan visi membangun gereja lokal berbasis pemuridan yang relevan dan transformatif. Di bawah naungan penggembalaan Dr. Leonardo A. Sjiamsuri, ia memimpin jemaat untuk bergerak dalam dimensi profetik dan apostolik demi mencetak pribadi yang serupa dengan Kristus. Fokus utamanya adalah melatih setiap jemaat menjadi murid yang efektif, mencintai Firman Tuhan, dan hidup berdampak di mana pun mereka ditempatkan.",
  },
  {
    name: "Ps. Leonardo A. Sijamsuri",
    photo: "/images/speakers/psleo.jpeg",
    bio: "Pastor Leonardo A. Sjiamsuri adalah pendiri dan Senior Pastor GKS – Light to the Nations sekaligus penulis buku best-seller Karisma versus Karakter yang memiliki latar belakang strategis sebagai mantan Direktur perbankan. Beliau berfokus pada transformasi karakter dan pendisipilan para eksekutif melalui SMART Centre serta Sekolah Tinggi Teologi The Truth Jakarta. Bersama keluarga, beliau berkomitmen melayani di tingkat nasional maupun internasional untuk mencetak agen perubahan yang berlandaskan pada kebenaran firman Tuhan.",
  },
  {
    name: "Ps. Michael D. J. Widjaja",
    photo: "/images/speakers/psmichael.jpeg",
    bio: "Ps. Michael Widjaja adalah pemimpin ROLAM Indonesia dan JMK Fellowship yang dipanggil untuk membangkitkan dan memperlengkapi Tubuh Kristus melalui penginjilan profetik serta pengajaran yang transformatif. Memulai pelayanan sejak usia muda di Amerika Serikat, ia kini aktif melayani secara internasional, memimpin berbagai KKR dan seminar—khususnya di Sulawesi—serta menyuarakan kebenaran melalui Dio Mike Podcast untuk menuntun orang percaya hidup dalam tujuan ilahi.",
  },
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      document
        .getElementById(location.state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])

  return (
    <div>

      {/* HERO */}
      <section
        id="home"
        className="
          mt-20
          relative
          h-[70vh] md:h-[90vh]
          flex
          items-center
          justify-center
          text-white
          overflow-hidden
        "
      >
        {/* HERO BACKGROUND IMAGE */}
        <div
          className="
            absolute inset-0
            bg-[url('/images/hero.jpg')]
            bg-cover
            bg-top
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* HERO CONTENT */}
        <h1 className="font-zalando relative z-10 text-4xl md:text-6xl font-bold text-center leading-tight px-6">
          RAISING GENERATION <br />
          FOR THE LAST MOVEMENT
        </h1>
      </section>

      {/* ABOUT / BLUE SECTION */}
      <section
        id="about"
        className="bg-primary text-white"
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-2">ABOUT US</h3>
              <p className="text-sm leading-relaxed">
                RGLM is a conference where we gather together as one body of Christ
                to learn, share, be encouraged, and be equipped to raise faithful
                leaders in the last days.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">WHERE</h3>
              <p className="text-sm">
                The Hall – Pentacity Mall<br />
                Balikpapan, First Floor
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">WHEN</h3>
              <p className="text-sm">
                30 April – 2 May 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section
        id="speakers"
        className="py-20 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            SPEAKERS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="bg-white p-6 text-center shadow"
              >
                {/* PHOTO */}
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-65 object-cover mb-4"
                />

                <h3 className="font-semibold text-lg mb-2">
                  {speaker.name}
                </h3>
                {/* SMALL PARAGRAPH */}
                <p className="font-inter text-[13px] text-gray-600 text-justify leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section
        id="venue"
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-200">
            {/* Map / image later */}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">THE HALL</h2>
            <p className="text-sm leading-relaxed">
              Pentacity Mall Balikpapan<br />
              First Floor<br />
              Jl. Jenderal Sudirman No.47
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 bg-gray-900 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
        <p className="text-sm">
          WhatsApp: +62 812 1000 7872<br />
          Email: gksbpn.office@gmail.com
        </p>
      </section>

    </div>
  )
}
