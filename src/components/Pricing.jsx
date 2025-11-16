import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    tagline: 'Get started with core tools',
    features: [
      'Limited AI credits',
      'Basic calendar',
      'Notes to quiz (limited)'
    ],
    cta: 'Start Free',
    highlighted: false
  },
  {
    name: 'Premium',
    price: '$9/mo',
    tagline: 'Most popular — full access',
    features: [
      'Unlimited AI assistant',
      'Smart calendar & reminders',
      'Personalized study plans',
      'Priority support'
    ],
    cta: 'Go Premium',
    highlighted: true
  },
  {
    name: 'Student Team',
    price: '$29/mo',
    tagline: 'For classes & study groups',
    features: [
      'Team spaces',
      'Shared quizzes & plans',
      'Admin controls'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Free trial available. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl p-6 ring-1 ring-gray-200 shadow-sm bg-white ${t.highlighted ? 'border-2 border-blue-600' : ''}`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
              <p className="mt-1 text-3xl font-bold text-gray-900">{t.price}</p>
              <p className="mt-1 text-sm text-gray-600">{t.tagline}</p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/pricing" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm ${t.highlighted ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'bg-white ring-1 ring-gray-200 text-gray-900 hover:bg-gray-50'}`}>
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900">FAQ</h3>
          <div className="mt-4 grid gap-4">
            <details className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
              <summary className="cursor-pointer font-medium text-gray-900">Can I cancel anytime?</summary>
              <p className="mt-2 text-sm text-gray-600">Yes, you can cancel at any time. Your plan will continue until the end of the billing period.</p>
            </details>
            <details className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
              <summary className="cursor-pointer font-medium text-gray-900">Is my data secure?</summary>
              <p className="mt-2 text-sm text-gray-600">We follow best practices for data security and privacy. Your information is encrypted and never sold.</p>
            </details>
            <details className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
              <summary className="cursor-pointer font-medium text-gray-900">How do credits work?</summary>
              <p className="mt-2 text-sm text-gray-600">Basic includes a limited number of AI requests per month. Premium unlocks unlimited AI usage.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
