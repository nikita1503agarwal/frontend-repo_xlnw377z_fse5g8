import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Settings, PlayCircle, BarChart } from 'lucide-react';

const steps = [
  { icon: Upload, title: 'Upload CV', desc: 'We analyze your experience to tailor questions.' },
  { icon: Settings, title: 'Configure', desc: 'Choose type, topic, difficulty, and persona.' },
  { icon: PlayCircle, title: 'Practice', desc: 'Interview with a 3D avatar and real-time feedback.' },
  { icon: BarChart, title: 'Get Report', desc: 'Review detailed insights and recommendations.' },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#2f404d] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#85ebd9] to-[#e2dddf] bg-clip-text text-center text-3xl font-semibold text-transparent md:text-4xl">
          How It Works
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative rounded-xl border border-[rgba(133,235,217,0.2)] bg-[rgba(61,137,141,0.15)] p-6 backdrop-blur-md"
            >
              <div className="mb-4 inline-flex rounded-lg border border-[#85ebd9]/40 p-3 text-[#85ebd9] shadow-[0_0_12px_rgba(133,235,217,0.25)]">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-[#e2dddf]">{title}</h3>
              <p className="mt-2 text-sm text-[#b0acb0]">{desc}</p>
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-[2px] w-7 -translate-y-1/2 bg-[#85ebd9]/50 md:block"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
