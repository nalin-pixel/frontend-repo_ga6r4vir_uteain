import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
