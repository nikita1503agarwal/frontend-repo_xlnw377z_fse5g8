import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const gradientText = 'bg-gradient-to-r from-[#85ebd9] to-[#e2dddf] bg-clip-text text-transparent';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#2f404d]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4P1iV7m5c4k0QkV7/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle grid overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(133,235,217,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
        {/* Dark gradient wash for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2f404d]/40 via-[#1a2733]/60 to-[#1a2733]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-semibold md:text-6xl ${gradientText}`}
        >
          Master Your Interview Skills with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-[#e2dddf]/90 md:text-lg"
        >
          Get instant insights on your emotions, body language, and answer quality from our
          AI-powered interview coach with lifelike 3D avatars.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#features"
            className="rounded-lg bg-[#85ebd9] px-6 py-3 font-medium text-[#2f404d] shadow-[0_0_20px_rgba(133,235,217,0.3)] transition hover:bg-[#a0f5e8] hover:shadow-[0_0_40px_rgba(133,235,217,0.5)]"
            aria-label="Start practicing now"
          >
            Start Practicing Now
          </a>
          <button
            className="rounded-lg border border-[#85ebd9] px-6 py-3 font-medium text-[#85ebd9] transition hover:bg-[#85ebd9]/10"
            aria-label="Watch demo"
          >
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
