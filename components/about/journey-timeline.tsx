export default function JourneyTimeline() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Our <span className="text-red-600">Journey</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-red-600 md:left-1/2 md:-ml-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* 2020 */}
            <div className="relative md:flex md:justify-between">
              <div className="ml-6 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="mb-2 text-lg font-bold text-red-600">Year 2020</div>
                <div className="rounded-lg bg-gray-100 p-4 shadow-md">
                  <p className="text-sm text-gray-600 md:text-base">
                    Founded Saavik Solutions with a vision to transform the digital landscape through innovative
                    technology solutions.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 md:left-1/2 md:-ml-2"></div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* 2022 */}
            <div className="relative md:flex md:justify-between">
              <div className="hidden md:block md:w-1/2"></div>
              <div className="absolute left-0 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 md:left-1/2 md:-ml-2"></div>
              <div className="ml-6 md:ml-0 md:w-1/2 md:pl-8">
                <div className="mb-2 text-lg font-bold text-red-600">Year 2022</div>
                <div className="rounded-lg bg-gray-100 p-4 shadow-md">
                  <p className="text-sm text-gray-600 md:text-base">
                    Expanded our services globally and established partnerships with leading technology providers to
                    enhance our offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

