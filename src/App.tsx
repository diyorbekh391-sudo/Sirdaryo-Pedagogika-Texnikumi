/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Yo'nalishlar Section (Placeholder for now) */}
        <section id="courses" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Ta'lim yo'nalishlari</h2>
              <p className="text-4xl font-black text-gray-900 mb-6 font-mono">Professional Kurslarimiz</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Boshlang'ich ta'lim", students: 450, color: "blue" },
                { title: "Maktabgacha ta'lim", students: 380, color: "purple" },
                { title: "Defektologiya", students: 120, color: "orange" },
                { title: "Jismoniy tarbiya", students: 290, color: "emerald" },
                { title: "Musiqa ta'limi", students: 150, color: "rose" },
                { title: "Texnologik ta'lim", students: 180, color: "cyan" },
              ].map((course) => (
                <div key={course.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{course.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{course.students} Talaba</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

