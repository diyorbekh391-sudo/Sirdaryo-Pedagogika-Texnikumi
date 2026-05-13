import { BookOpen, Users, Cpu, Award } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: "Sifatli Ta'lim",
    description: "Zamonaviy o'quv dasturlari va tajribali pedagoglar jamoasi.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Amaliy Mashg'ulotlar",
    description: "Nazariy bilimlarni amaliyot bilan mustahkamlash imkoniyati.",
    icon: Cpu,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Iqtidorli Talabalar",
    description: "Talabalarimiz turli tanlov va olimpiadalarda g'oliblikni qo'lga kiritishmoqda.",
    icon: Users,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Diplom va Karyera",
    description: "Bitiruvchilarimizga davlat namunasidagi diplom beriladi.",
    icon: Award,
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Texnikum haqida</h2>
          <p className="text-4xl font-black text-gray-900 mb-6">Nima uchun Aynan Sirdaryo Pedagogika Texnikumi?</p>
          <p className="text-gray-600 text-lg">Bizning maqsadimiz – o'z kasbiga sadoqatli, zamonaviy fikrlaydigan va yuqori malakali pedagog kadrlar tayyorlashdan iborat.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
