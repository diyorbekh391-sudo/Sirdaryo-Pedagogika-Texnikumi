import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Send, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-black text-white uppercase tracking-tight">Sirdaryo PT</h2>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Sirdaryo viloyati pedagogika texnikumi – zamonaviy ta'lim va professional pedagog kadrlar tayyorlash markazi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-blue-600 transition-colors">
                <Send className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-blue-600 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Foydali havolalar</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bosh sahifa</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Biz haqimizda</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Yo'nalishlar</a></li>
              <li><a href="#news" className="hover:text-blue-400 transition-colors">Yangiliklar</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Yo'nalishlar</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Boshlang'ich ta'lim</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Maktabgacha ta'lim</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Jismoniy tarbiya</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Musiqa ta'limi</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Bog'lanish</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Sirdaryo viloyati, Guliston shahri, Sayhun ko'chasi, 2-uy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+998 (67) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@sirdaryopt.uz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Sirdaryo viloyati pedagogika texnikumi. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-8 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
