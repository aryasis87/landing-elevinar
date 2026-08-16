"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  UserCircle2Icon, 
  PaletteIcon, 
  LightbulbIcon 
} from 'lucide-react';

const speakers = [
  {
    name: "Maya Kreativa",
    title: "Founder Startup Anak Kreatif",
    bio: "Ahli pengembangan kreativitas anak melalui teknologi",
    image: "/images/p7.jpg", // Ganti dengan path aktual
    expertise: ["Pendidikan Inovatif", "Startup Anak", "Teknologi Kreatif"]
  },
  {
    name: "Raka Inspiratif",
    title: "Mentor Komunitas Muda",
    bio: "Penggerak inspirasi dan kolaborasi anak muda",
    image: "/images/p8.jpg", // Ganti dengan path aktual
    expertise: ["Kepemimpinan Muda", "Motivasi", "Networking"]
  },
  {
    name: "Sasha Digital",
    title: "Inovator Pendidikan Digital",
    bio: "Spesialis transformasi pendidikan berbasis teknologi",
    image: "/images/p9.jpg", // Ganti dengan path aktual
    expertise: ["E-Learning", "Desain Kurikulum Digital", "Teknologi Pendidikan"]
  }
];

const Speakers = () => {
  return (
    <section className="bg-stage-2 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="text-4xl font-bold text-spot mb-4"
          >
            Para Pembicara Inspiratif
          </motion.h2>
          <p className="text-spot-soft max-w-2xl mx-auto">
            Temui para inovator dan mentor yang akan membangkitkan kreativitas 
            dan semangat anak-anak serta para pelaku startup muda!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5 
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2
              }}
              className="bg-stage-2 rounded-xl shadow-lg p-6 text-center 
                         hover:border-spot/60 border-2 border-transparent 
                         transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 relative rounded-full overflow-hidden 
                                bg-spot/12 flex items-center justify-center">
                  {speaker.image ? (
                    <Image 
                      src={speaker.image} 
                      alt={speaker.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={index < 2} // Prioritaskan gambar pertama
                    />
                  ) : (
                    <UserCircle2Icon 
                      className="w-24 h-24 text-spot" 
                      strokeWidth={1}
                    />
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-spot mb-2">
                {speaker.name}
              </h3>
              <p className="text-spot mb-3 italic">
                {speaker.title}
              </p>
              <p className="text-spot-soft mb-4">{speaker.bio}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {speaker.expertise.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-spot/12 text-spot 
                               px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-spot/12 
                          rounded-full px-6 py-3 text-spot-soft">
            <LightbulbIcon className="mr-2 text-spot" />
            Bergabunglah untuk inspirasi dan kolaborasi!
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Speakers;