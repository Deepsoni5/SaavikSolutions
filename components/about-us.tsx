import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
              We are <span className="text-red-600">Saavik Solutions</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-700 md:text-lg">
              Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the
              globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we
              help businesses scale and innovate. Our commitment to excellence and customer success drives us to
              transform ideas into powerful digital solutions.
            </p>
            <div>
              <Button className="rounded-full bg-red-600 px-8 py-6 text-sm font-medium uppercase tracking-wide hover:bg-red-700 hover:shadow-lg transition-all duration-300">
                KNOW MORE ABOUT US
              </Button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[350px]">
              <Image
                src="/images/tech-meeting.jpg"
                alt="IT Professional in a video meeting"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-red-600/30 p-3 backdrop-blur-sm transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <PlayCircle className="h-14 w-14 text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

