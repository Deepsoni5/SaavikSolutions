export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
          Why Work With <span className="text-red-600">Us?</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Innovation Driven */}
          <div className="group flex h-[200px] flex-col items-center justify-center rounded-lg bg-red-500 p-8 text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-6 text-center text-2xl font-bold">Innovation Driven</h3>
            <p className="text-center text-sm leading-relaxed">
              Work on cutting-edge projects that challenge and inspire you.
            </p>
          </div>

          {/* Collaborative Culture */}
          <div className="group flex h-[200px] flex-col items-center justify-center rounded-lg bg-gray-100 p-8 text-gray-800 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-6 text-center text-2xl font-bold">Collaborative Culture</h3>
            <p className="text-center text-sm leading-relaxed">
              Join a team that values ideas, creativity, and teamwork.
            </p>
          </div>

          {/* Impactful Work */}
          <div className="group flex h-[200px] flex-col items-center justify-center rounded-lg bg-red-500 p-8 text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-6 text-center text-2xl font-bold">Impactful Work</h3>
            <p className="text-center text-sm leading-relaxed">
              Your contributions matter, shaping the success of businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

