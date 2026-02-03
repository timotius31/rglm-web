import { useState } from "react"

export default function TicketIndividual() {
  const PRICE = 200000
  const MAX_QTY = 4

  const [qty, setQty] = useState(1)
  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)

  const subtotal = qty * PRICE
  const total = subtotal - discount

  const increaseQty = () => {
    if (qty < MAX_QTY) setQty(qty + 1)
  }

  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1)
  }

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "EARLYBIRD") {
      setDiscount(50000)
    } else {
      setDiscount(0)
    }
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">

          {/* CART ITEM */}
          <div className="border border-gray-300 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div className="font-medium">
              STAR GENERATION - PERSONAL
            </div>

            <div className="flex items-center gap-4 self-start sm:self-auto">
              <button
                onClick={decreaseQty}
                className="border px-4 py-2 text-lg sm:px-3 sm:py-1 sm:text-base"
              >
                −
              </button>

              <span className="min-w-[24px] text-center">{qty}</span>

              <button
                onClick={increaseQty}
                className="border px-4 py-2 text-lg sm:px-3 sm:py-1 sm:text-base"
              >
                +
              </button>
            </div>
          </div>

          {/* COUPON */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border border-gray-300 px-4 py-2 w-full"
            />
            <button
              onClick={applyCoupon}
              className="bg-black text-white px-6 py-2 sm:py-0"
            >
              Apply
            </button>
          </div>

          {/* ATTENDEES */}
          <div className="mt-6">
            {[...Array(qty)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-300 p-4 sm:p-6 mt-6 w-full"
              >
                <h3 className="font-bold text-sm mb-4 sm:mb-6">
                  ATTENDEE {i + 1}
                </h3>

                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 px-4 py-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 px-4 py-2 w-full"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-gray-300 px-4 py-2 w-full mb-4"
                />

                {/* Phone */}
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 px-4 py-2 w-full mb-4"
                />

                {/* Church */}
                <input
                  type="text"
                  placeholder="Your Church"
                  className="border border-gray-300 px-4 py-2 w-full"
                />
              </div>
            ))}
          </div>

          {/* MOBILE CHECKOUT (END OF PAGE) */}
          <div className="mt-10 lg:hidden">
            <div className="border border-gray-300 p-4">
              <p className="mb-2">
                Subtotal:
                <span className="float-right">Rp {subtotal}</span>
              </p>

              <p className="mb-4">
                Discount:
                <span className="float-right">Rp {discount}</span>
              </p>

              <p className="font-bold mb-4">
                Total:
                <span className="float-right">Rp {total}</span>
              </p>

              <button className="w-full bg-accent text-white py-3">
                Proceed to Checkout
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN – DESKTOP SUMMARY */}
        <div className="border border-gray-300 p-6 h-fit hidden lg:block">
          <p className="mb-2">
            Subtotal:
            <span className="float-right">Rp {subtotal}</span>
          </p>

          <p className="mb-4">
            Discount:
            <span className="float-right">Rp {discount}</span>
          </p>

          <p className="font-bold mb-6">
            Total:
            <span className="float-right">Rp {total}</span>
          </p>

          <button className="w-full bg-accent text-white py-3">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  )
}
