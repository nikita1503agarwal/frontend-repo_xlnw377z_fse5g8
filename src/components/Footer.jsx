import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a2733] py-10 text-[#e2dddf]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h3 className="text-xl font-semibold">Adaptive AI Interview Coach</h3>
          <p className="mt-1 text-sm text-[#b0acb0]">Practice smarter. Interview better.</p>
        </div>
        <nav className="flex items-center gap-5">
          <a href="#" className="text-[#b0acb0] transition hover:text-[#85ebd9]" aria-label="GitHub">
            <Github />
          </a>
          <a href="#" className="text-[#b0acb0] transition hover:text-[#85ebd9]" aria-label="Twitter">
            <Twitter />
          </a>
          <a href="#" className="text-[#b0acb0] transition hover:text-[#85ebd9]" aria-label="Email">
            <Mail />
          </a>
        </nav>
        <p className="text-sm text-[#b0acb0]">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
