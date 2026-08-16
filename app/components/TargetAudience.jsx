'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  ZapIcon, 
  CodeIcon, 
  HeartIcon 
} from 'lucide-react';

const audienceData = [
  {
    id: 1,
    title: "Pelajar Digital",
    subtitle: "Generasi Inovator",
    description: "Anak muda yang haus akan pengetahuan teknologi dan kreativitas.",
    characteristics: [
      "Tertarik teknologi mutakhir",
      "Memiliki rasa ingin tahu tinggi",
      "Siap menghadapi tantangan global"
    ],
    color: "bg-gradient-to-br from-blue-500 to-purple-600",
    icon: <CodeIcon className="w-16 h-16 text-chalk" />
  },
  {
    id: 2,
    title: "Calon Entrepreneur",
    subtitle: "Pemimpin Masa Depan",
    description: "Individu dengan semangat kewirausahaan dan visi transformatif.",
    characteristics: [
      "Berpikir di luar kebiasaan",
      "Berani mengambil risiko",
      "Memiliki passionate terhadap inovasi"
    ],
    color: "bg-gradient-to-br from-spot to-curtain",
    icon: <ZapIcon className="w-16 h-16 text-chalk" />
  },
  {
    id: 3,
    title: "Komunitas Kreatif",
    subtitle: "Ekosistem Kolaborasi",
    description: "Kelompok yang mendorong pertumbuhan bersama melalui sharing dan networking.",
    characteristics: [
      "Saling mendukung",
      "Terbuka terhadap ide baru",
      "Membangun jaringan berkelanjutan"
    ],
    color: "bg-gradient-to-br from-green-500 to-spot-soft",
    icon: <HeartIcon className="w-16 h-16 text-chalk" />
  }
];

const TargetAudience = () => {
  const [activeAudience, setActiveAudience] = useState(null);

  return (
    <section className="bg-stage-2 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-chalk mb-4">
            Siapa Mereka?
          </h2>
          <p className="text-dust max-w-2xl mx-auto">
            Mengenal lebih dekat para talenta muda yang akan membentuk masa depan digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audienceData.map((audience) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveAudience(audience.id)}
              onMouseLeave={() => setActiveAudience(null)}
              className={`relative overflow-hidden rounded-2xl shadow-lg 
                          transform transition-all duration-300 
                          ${activeAudience === audience.id 
                            ? 'scale-105 z-10' 
                            : 'scale-100'}`}
            >
              <div className={`absolute inset-0 ${audience.color} opacity-80`}></div>
              
              <div className="relative z-10 p-8 text-chalk">
                <div className="flex justify-between items-center mb-6">
                  {audience.icon}
                  <div className="bg-stage-2/20 rounded-full p-3">
                    <UsersIcon className="w-6 h-6 text-chalk" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{audience.title}</h3>
                <p className="text-sm mb-4 opacity-80">{audience.subtitle}</p>
                
                <p className="mb-6 text-sm opacity-90">{audience.description}</p>

                <div className="space-y-3">
                  {audience.characteristics.map((char, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-stage-2 rounded-full"></div>
                      <span className="text-sm">{char}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TargetAudience;