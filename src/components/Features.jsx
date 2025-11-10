import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Mic, BarChart, Brain } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Real-Time Analysis',
    desc: 'Eye, face, and gesture tracking provide instant feedback while you answer.',
  },
  {
    icon: Mic,
    title: '3D AI Interviewer',
    desc: 'Practice with lifelike avatars powered by Gemini-TTS for natural dialogue.',
  },
  {
    icon: BarChart,
    title: 'Personalized Feedback',
    desc: 'Actionable tips and detailed reports help you improve after each session.',
  },
  {
    icon: Brain,
    title: 'Adaptive Coaching',
    desc: 'The coach adjusts tone and difficulty based on your stress and performance.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 w-full bg-[#1a2733] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#85ebd9] to-[#e2dddf] bg-clip-text text-center text-3xl font-semibold text-transparent md:text-4xl">
          Built for Better Practice
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#e2dddf]/80">
          Modern, immersive, and accessible — everything you need to master your interviews.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-[rgba(133,235,217,0.2)] bg-[rgba(61,137,141,0.15)] p-6 backdrop-blur-md transition hover:border-[#85ebd9] hover:shadow-[0_0_24px_rgba(133,235,217,0.35)]"
            >
              <div className="mb-4 inline-flex rounded-lg border border-[#85ebd9]/40 p-3 text-[#85ebd9] shadow-[0_0_12px_rgba(133,235,217,0.25)]">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-[#e2dddf]">{title}</h3>
              <p className="mt-2 text-sm text-[#b0acb0]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
