import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Contact & Support</h1>
            <p className="mt-4 text-gray-700">Have questions? We’re here to help. Email us at <a className="text-blue-600" href="mailto:support@learniestudy.com">support@learniestudy.com</a></p>

            <form className="mt-8 grid gap-4">
              <input type="text" placeholder="Name" className="w-full rounded-md ring-1 ring-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="email" placeholder="Email" className="w-full rounded-md ring-1 ring-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <textarea rows="5" placeholder="Message" className="w-full rounded-md ring-1 ring-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm">Send message</button>
            </form>

            <div className="mt-10 grid gap-4">
              <details className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <summary className="cursor-pointer font-medium text-gray-900">Is the AI safe for children?</summary>
                <p className="mt-2 text-sm text-gray-600">Yes. We design Learnie with safety and clarity in mind, suitable for learners of all ages.</p>
              </details>
              <details className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <summary className="cursor-pointer font-medium text-gray-900">Does Learnie work on both mobile and desktop?</summary>
                <p className="mt-2 text-sm text-gray-600">Absolutely. Learnie is fully responsive and works on phones, tablets, and computers.</p>
              </details>
              <details className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <summary className="cursor-pointer font-medium text-gray-900">Can I use my account on multiple devices?</summary>
                <p className="mt-2 text-sm text-gray-600">Yes, your account works seamlessly across devices.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
