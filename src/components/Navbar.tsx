import { GraduationCap, Facebook, Instagram, Send, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="bg-blue-600 p-2 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-blue-900 leading-tight uppercase tracking-tight sm:text-base">
                Sirdaryo viloyati
              </h1>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                Pedagogika Texnikumi
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Bosh sahifa</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Biz haqimizda</a>
            <a href="#courses" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Yo'nalishlar</a>
            <a href="#news" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Yangiliklar</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Bog'lanish</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all"
                title={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
