import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Features />
      </main>
      <Footer />
    </div>
  )
}
