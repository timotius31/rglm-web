export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>© rglm Conference</div>
        <div>
          Worship Hours<br />
          Mon–Fri: 10am, 12pm, 5pm<br />
          Sun: 10am, 4pm
        </div>
        <div className="text-right">Balikpapan</div>
      </div>
    </footer>
  )
}
