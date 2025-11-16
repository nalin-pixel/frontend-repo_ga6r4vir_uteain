import { motion } from 'framer-motion'
import { FileText, Sparkles, GraduationCap } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Upload notes',
    desc: 'Drop your notes or paste text. Learnie understands and organizes it instantly.'
  },
  {
    icon: Sparkles,
    title: 'Get quizzes & a study plan',
    desc: 'AI turns your material into bite-sized quizzes and a personalized plan.'
  },
  {
    icon: GraduationCap,
    title: 'Ace your exam',
    desc: 'Track progress on the smart calendar and study with confidence.'
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A simple flow that saves you time and reduces stress.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
            >
              <s.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
