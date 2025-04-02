export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/office-background.jpg')",
            filter: "brightness(0.3)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Empowering <span className="text-red-600">Businesses</span> with
          <br />
          Cutting-Edge <span className="text-red-600">IT Solutions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
          From software to staffing, we deliver tailored solutions that drive growth and innovation.
        </p>
      </div>
    </section>
  )
}

