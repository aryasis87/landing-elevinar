'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDownIcon, 
  HelpCircleIcon 
} from 'lucide-react';

const faqData = [
  {
    category: "Umum",
    questions: [
      {
        question: "Siapa target peserta webinar ini?",
        answer: "Webinar ini ditujukan untuk anak-anak usia 10-16 tahun, calon entrepreneur muda, dan komunitas kreatif yang tertarik mengembangkan keterampilan digital dan inovasi."
      },
      {
        question: "Bagaimana cara mengikuti webinar?",
        answer: "Peserta dapat mendaftar melalui halaman registrasi di website kami. Setelah pendaftaran dan pembayaran selesai, link zoom atau platform webinar akan dikirimkan via email."
      }
    ]
  },
  {
    category: "Teknis",
    questions: [
      {
        question: "Apakah saya memerlukan perangkat khusus?",
        answer: "Anda hanya membutuhkan komputer/smartphone dengan koneksi internet stabil, mikropon, dan kamera. Kami menyarankan menggunakan headset untuk kualitas suara yang lebih baik."
      },
      {
        question: "Berapa lama durasi setiap sesi webinar?",
        answer: "Setiap sesi webinar berlangsung sekitar 60-90 menit, termasuk sesi tanya jawab dan diskusi interaktif."
      }
    ]
  },
  {
    category: "Pasca Webinar",
    questions: [
      {
        question: "Apakah saya mendapatkan sertifikat?",
        answer: "Ya, peserta yang mengikuti minimal 75% dari total sesi akan mendapatkan sertifikat kompetensi digital yang dapat digunakan untuk porto folio."
      },
      {
        question: "Apakah tersedia rekaman webinar?",
        answer: "Rekaman webinar tersedia untuk paket Pro dan Elite. Peserta dapat mengakses rekaman selama 30 hari setelah acara berlangsung."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (category, index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  return (
    <section className="bg-stage-2 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-spot mb-4"
          >
            Pertanyaan yang Sering Diajukan
          </motion.h2>
          <p className="text-spot-soft max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar webinar kami
          </p>
        </div>

        {/* Kategori FAQ */}
        <div className="flex justify-center space-x-4 mb-8">
          {faqData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 
                          ${activeCategory === category.category 
                            ? 'bg-spot text-stage' 
                            : 'bg-spot/12 text-spot'}`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Daftar Pertanyaan */}
        <div>
          {faqData
            .find(cat => cat.category === activeCategory)
            .questions.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  onClick={() => toggleQuestion(activeCategory, index)}
                  className="bg-stage-2 rounded-lg mb-4 shadow-md cursor-pointer"
                >
                  <div className="flex justify-between items-center p-5">
                    <div className="flex items-center space-x-3">
                      <HelpCircleIcon className="w-6 h-6 text-spot" />
                      <h3 className="text-lg font-semibold text-spot-soft">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDownIcon 
                      className={`w-6 h-6 text-spot transition-transform 
                                  ${openQuestions[`${activeCategory}-${index}`] 
                                    ? 'rotate-180' : ''}`} 
                    />
                  </div>

                  <AnimatePresence>
                    {openQuestions[`${activeCategory}-${index}`] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-spot">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;