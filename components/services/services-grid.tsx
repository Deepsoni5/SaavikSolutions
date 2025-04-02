const services = [
  {
    id: 1,
    title: "Web Development",
    color: "bg-red-600",
  },
  {
    id: 2,
    title: "UI & UX Design",
    color: "bg-white",
    textColor: "text-red-600",
    border: "border border-gray-200",
  },
  {
    id: 3,
    title: "Testing",
    color: "bg-white",
    textColor: "text-red-600",
    border: "border border-gray-200",
  },
  {
    id: 4,
    title: "Software Solutions",
    color: "bg-pink-200",
    textColor: "text-red-600",
  },
  {
    id: 5,
    title: "Digital Marketing",
    color: "bg-red-600",
  },
  {
    id: 6,
    title: "Mobile App Development",
    color: "bg-pink-200",
    textColor: "text-red-600",
  },
]

export default function ServicesGrid() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-10 text-2xl font-bold text-black md:text-3xl">
          We Provide Prominent <br />
          IT Solutions
        </h2>

        <div className="mx-auto max-w-4xl">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-6">
            {/* First Row */}
            <div className="aspect-square flex items-center justify-center rounded-lg bg-red-600 p-4 shadow-md transition-transform hover:scale-[1.02]">
              <span className="text-center text-lg font-semibold text-white">Web Development</span>
            </div>
            <div className="aspect-square flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-transform hover:scale-[1.02]">
              <span className="text-center text-lg font-semibold text-red-600">UI & UX Design</span>
            </div>
            <div className="aspect-square flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-transform hover:scale-[1.02]">
              <span className="text-center text-lg font-semibold text-red-600">Testing</span>
            </div>

            {/* Second Row with offset */}
            <div className="mt-12 aspect-square flex items-center justify-center rounded-lg bg-pink-200 p-4 shadow-md transition-transform hover:scale-[1.02]">
              <span className="text-center text-lg font-semibold text-red-600">Software Solutions</span>
            </div>
            <div className="mt-12 aspect-square flex items-center justify-center rounded-lg bg-red-600 p-4 shadow-md transition-transform hover:scale-[1.02]">
              <span className="text-center text-lg font-semibold text-white">Digital Marketing</span>
            </div>
            <div className="mt-12 aspect-square flex items-center justify-center rounded-lg bg-pink-200 p-4 shadow-md transition-transform hover:scale-[1.02]">
              <span className="text-center text-lg font-semibold text-red-600">Mobile App Development</span>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`aspect-square flex items-center justify-center rounded-lg ${service.color} ${service.border || ""} p-4 shadow-md ${index > 1 ? "mt-8" : ""} ${service.textColor || "text-white"}`}
              >
                <span className="text-center text-sm font-semibold">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

