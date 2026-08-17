'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  CalendarIcon, 
  StarIcon 
} from 'lucide-react';

const scheduleData = [
  {
    date: "10 Agustus 2024",
    sessions: [
      {
        time: "09:00 - 10:00",
        title: "Pengantar Kreativitas Digital",
        speaker: "Maya Kreativa",
        description: "Memahami potensi kreativitas anak di era digital",
        type: "Pembukaan"
      },
      {
        time: "10:15 - 11:30",
        title: "Startup Anak: Memulai Perjalanan Inovasi",
        speaker: "Raka Inspiratif",
        description: "Strategi membangun mindset kewirausahaan sejak dini",
        type: "Workshop"
      },
      {
        time: "13:00 - 14:30",
        title: "Teknologi Pendidikan Masa Depan",
        speaker: "Sasha Digital",
        description: "Transformasi pembelajaran melalui teknologi terkini",
        type: "Keynote"
      }
    ]
  },
  {
    date: "11 Agustus 2024",
    sessions: [
      {
        time: "09:30 - 11:00",
        title: "Kolaborasi dan Networking untuk Anak Muda",
        speaker: "Tim Komunitas Kreatif",
        description: "Membangun jaringan dan kolaborasi lintas generasi",
        type: "Panel Diskusi"
      },
      {
        time: "11:15 - 12:45",
        title: "Praktik Inovasi dalam Pendidikan",
        speaker: "Ahli Pendidikan Inovatif",
        description: "Workshop praktis pengembangan keterampilan masa depan",
        type: "Workshop Interaktif"
      }
    ]
  }
];

const Schedule = () => {
  const [activeDate, setActiveDate] = useState(0);

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
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-spot mb-4"
          >
            Jadwal Webinar
          </motion.h2>
          <p className="text-spot-soft max-w-2xl mx-auto">
            Rangkaian sesi inspiratif dan transformatif untuk anak-anak 
            dan pelaku startup kreatif
          </p>
        </div>

        {/* Date Selector */}
        <div className="flex justify-center mb-8 space-x-4">
          {scheduleData.map((schedule, index) => (
            <motion.button
              key={schedule.date}
              onClick={() => setActiveDate(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 
                          flex items-center space-x-2 
                          ${activeDate === index 
                            ? 'bg-spot text-stage' 
                            : 'bg-spot/12 text-spot'}`}
            >
              <CalendarIcon className="w-5 h-5" />
              <span>{schedule.date}</span>
            </motion.button>
          ))}
        </div>

        {/* Sessions */}
        <div className="max-w-4xl mx-auto space-y-6">
          {scheduleData[activeDate].sessions.map((session, index) => (
            <motion.div
              key={session.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5 
              }}
              viewport={{ once: true }}
              className="bg-stage-2 rounded-xl shadow-md p-6 
                          border-l-4 border-spot 
                          hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-6 h-6 text-spot" />
                  <span className="text-spot font-semibold">
                    {session.time}
                  </span>
                </div>
                <span className="bg-spot/12 text-spot 
                                 px-3 py-1 rounded-full text-xs">
                  {session.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-spot-soft mb-2">
                {session.title}
              </h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <StarIcon className="w-5 h-5 text-spot" />
                <p className="text-spot">{session.speaker}</p>
              </div>
              
              <p className="text-spot">
                {session.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Schedule;