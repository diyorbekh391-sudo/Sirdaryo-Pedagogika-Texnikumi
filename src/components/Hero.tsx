import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-blue-50/50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" />
              <span>Kelajak pedagoglari maskani</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
              Sirdaryo Pedagogika <br />
              <span className="text-blue-600">Texnikumi</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Biz kelajak avlod ustozlarini tayyorlashda zamonaviy ta'lim metodikalari va innovatsion texnologiyalardan foydalanamiz. Professional ta'lim bilan kelajagingizni quring.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-200">
                Hujjat topshirish
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                Batafsil ma'lumot
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200" 
                alt="Technical School Building" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-black text-blue-600">1500+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Talabalar</p>
                </div>
                <div className="w-px bg-gray-100" />
                <div>
                  <p className="text-2xl font-black text-blue-600">50+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">O'qituvchilar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
