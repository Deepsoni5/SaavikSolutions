import Image from "next/image"
import { Target, Rocket } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/mission-image.jpg"
                alt="Team collaboration"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600/90">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-wider text-white md:text-2xl">OUR MISSION</h2>
              </div>

              <div className="mt-auto">
                <div className="mb-4 h-1 w-16 bg-red-600"></div>
                <p className="text-sm leading-relaxed text-gray-200 md:text-base">
                  Our mission is to empower businesses with innovative technology solutions that drive growth and
                  efficiency. We are committed to delivering exceptional value through our expertise, integrity, and
                  client-focused approach.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/vision-image.jpg"
                alt="Rocket launch"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/90">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-wider text-white md:text-2xl">OUR VISION</h2>
              </div>

              <div className="mt-auto">
                <div className="mb-4 h-1 w-16 bg-yellow-500"></div>
                <p className="text-sm leading-relaxed text-gray-200 md:text-base">
                  We envision a world where technology seamlessly enhances human potential. Our vision is to be the
                  leading global technology partner that transforms ideas into powerful digital solutions that shape the
                  future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

