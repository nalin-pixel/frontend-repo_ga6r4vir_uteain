import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              AI that makes studying easier — for every student
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
            >
              Learnie — Your AI-Powered Study Companion
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-xl text-lg leading-7 text-gray-700"
            >
              Transform notes into quizzes, personalized study plans, and clear explanations. Stay organized with a smart calendar designed for students, parents, and study groups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="/pricing" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-indigo-700">
                Try for Free
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-md bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-white">
                How it Works
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6 pointer-events-none">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-purple-500/20 ring-1 ring-white/30 shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
    </section>
  )
}
