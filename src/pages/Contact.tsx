import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-6 flex flex-col items-center pt-16 md:pt-24 pb-20"
    >
      <div className="w-full max-w-2xl text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-white">
          Contact Me
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium max-w-lg mx-auto">
          Do you have a project to discuss or just want to say hi? Feel free to leave a message, I will get back to you as soon as possible.
        </p>
      </div>

      <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:vttvaninfo@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 group-hover:bg-[#111111] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                  <p className="font-semibold text-[#111111] dark:text-white">vttvaninfo@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+84396542662" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 group-hover:bg-[#111111] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone</p>
                  <p className="font-semibold text-[#111111] dark:text-white">+84 39 654 2662</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 group-hover:bg-[#111111] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                  <p className="font-semibold text-[#111111] dark:text-white">Hanoi, Vietnam</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <form className="bg-white/50 dark:bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#111111] dark:text-gray-300 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#111111] dark:text-gray-300 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#111111] dark:text-gray-300 uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                placeholder="What do you want to discuss?" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#111111] dark:text-gray-300 uppercase tracking-wider">Message</label>
              <textarea 
                rows={5}
                placeholder="Enter detailed content..." 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-[#111111] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#111111] dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors shadow-md group">
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
