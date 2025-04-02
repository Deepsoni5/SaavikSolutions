import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import TrustedBy from "@/components/trusted-by"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import EnterpriseSolutions from "@/components/enterprise-solutions"
import Products from "@/components/products"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"
import LetsDiscuss from "@/components/lets-discuss"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-black text-white">
        <Navbar />
        <Hero />
        <TrustedBy />
      </div>
      <AboutUs />
      <Services />
      <EnterpriseSolutions />
      <Products />
      <Testimonials />
      <BlogSection />
      <LetsDiscuss />
      <Footer />
    </main>
  )
}

