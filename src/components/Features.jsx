import { motion } from 'framer-motion'
import { Brain, CalendarDays, ListChecks, Shield, UsersRound } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Study Assistant',
    desc: 'Transform notes into quizzes, flashcards, and clear explanations tailored to your level.'
  },
  {
    icon: CalendarDays,
    title: 'Smart Calendar',
    desc: 'Organize exams, homework, and study sessions with reminders that keep you on track.'
  },
  {
    icon: ListChecks,
    title: 'Personalized Plans',
    desc: 'AI adapts to your goals and time. See exactly what to study each day.'
  },
  {
    icon: UsersRound,
    title: 'For Every Student',
    desc: 'From middle school to university — designed to be simple and effective for all ages.'
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    desc: 'Your data stays safe. We use best-in-class security and privacy practices.'
  },
]

export default function Features() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Powerful features that make learning easier</h2>
            <p className="mt-3 text-gray-600">Built to help you learn more in less time — with smart guidance every step of the way.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md"
              >
                <f.icon className="h-6 w-6 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
