'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  TargetIcon, 
  BookOpenIcon, 
  CodeIcon, 
  UsersIcon 
} from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const aboutFeatures = [
    {
      icon: <TargetIcon className="w-12 h-12 text-spot" />,
      title: "Fokus Terarah",
      description: "Kurikulum dibuat spesifik untuk mengembangkan keterampilan digital yang paling relevan saat ini."
    },
    {
      icon: <BookOpenIcon className="w-12 h-12 text-amber-600" />,
      title: "Metode Praktis",
      description: "Pembelajaran berbasis project dengan studi kasus dari industri terkini dan real-world scenarios."
    },
    {
      icon: <CodeIcon className="w-12 h-12 text-red-600" />,
      title: "Teknologi Mutakhir",
      description: "Mengupas teknologi terbaru seperti AI, blockchain, cloud computing, dan strategi digital."
    },
    {
      icon: <UsersIcon className="w-12 h-12 text-spot" />,
      title: "Networking Eksklusif",
      description: "Terhubung dengan para profesional, mentor, dan komunitas inovatif di bidang digital."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative bg-stage-2 py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 md:w-40 h-24 md:h-40 
          bg-spot/12 rounded-3xl transform rotate-45 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 md:w-56 h-32 md:h-56 
          bg-amber-200/30 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-chalk mb-4">
            Mengapa <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-curtain">
              Webinar Ini Berbeda
            </span>
          </h2>
          <p className="text-base md:text-lg text-dust max-w-3xl mx-auto">
            Kami tidak sekadar memberikan informasi, tetapi menghadirkan transformasi nyata. 
            Setiap sesi dirancang untuk membangun kompetensi digital yang komprehensif.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {aboutFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-stage-2 border border-chalk/12 rounded-xl p-6 
                hover:shadow-lg hover:border-chalk/12 transition-all duration-300 
                transform hover:-translate-y-2 group"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-chalk mb-3">
                {feature.title}
              </h3>
              <p className="text-center text-dust text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Update Badge */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-stage-2 
            border border-chalk/12 rounded-full px-6 py-3">
            <CodeIcon className="w-6 h-6 text-spot" />
            <span className="text-sm md:text-base text-chalk">
              Update Konten Setiap 3 Bulan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;