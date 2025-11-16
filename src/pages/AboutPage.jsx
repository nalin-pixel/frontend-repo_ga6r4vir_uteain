import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Vision</h1>
            <p className="mt-4 text-gray-700">We are a Swedish UF company passionate about making studying easier and more enjoyable for everyone. We believe smart technology can give every student the tools to succeed — regardless of background, subject, or level.</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[1,2,3,4].map((i) => (
                <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Teammate {i}</h3>
                  <p className="mt-1 text-sm text-gray-600">Role — A short line about what drives them.</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 ring-1 ring-blue-100">
              <h3 className="text-xl font-semibold text-gray-900">Interested in partnering with us?</h3>
              <p className="mt-2 text-gray-700">We’d love to connect. Reach out and let’s explore how we can support students together.</p>
              <a href="/contact" className="mt-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm">Get in touch</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
