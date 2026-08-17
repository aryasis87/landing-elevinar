'use client';

import { motion } from 'framer-motion';

const angka = [
  ['4 sesi', 'Sepanjang satu hari'],
  ['120 menit', 'Tiap sesi, termasuk tanya jawab'],
  ['300 kursi', 'Dibatasi agar diskusi tetap hidup'],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stage pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Kerucut lampu sorot dari atas panggung */}
      <div aria-hidden="true" className="spotlight absolute inset-x-0 top-0 h-[34rem]" />
      <div aria-hidden="true" className="stage-floor absolute inset-x-0 bottom-0 h-52" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cue mb-8 text-spot"
        >
          Panggung Elevinar · Daring
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[2.7rem] leading-[0.98] font-extrabold sm:text-6xl lg:text-[4.6rem]"
        >
          Lampu menyala.
          <br />
          <span className="text-spot">Tempat Anda sudah ada.</span>
        </motion.h1>

        <motion.p className="mx-auto mt-7 max-w-xl leading-relaxed text-dust">
          Webinar yang dijalankan seperti pertunjukan: jadwal yang ditepati, pembicara yang
          disiapkan, dan jumlah kursi yang sengaja dibatasi supaya sesi tanya jawab tidak
          tenggelam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#tiket"
            className="inline-flex items-center justify-center bg-spot px-8 py-4 text-sm font-bold text-stage transition-colors duration-300 hover:bg-spot-soft"
          >
            Ambil Kursi
          </a>
          <a
            href="#panggung"
            className="inline-flex items-center justify-center border border-chalk/25 px-8 py-4 text-sm font-bold text-chalk transition-colors duration-300 hover:border-chalk/60"
          >
            Lihat Denah Panggung
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mx-auto mt-16 grid max-w-3xl gap-8 border-t border-chalk/12 pt-9 sm:grid-cols-3"
        >
          {angka.map(([nilai, ket]) => (
            <div key={nilai}>
              <dt className="sr-only">{ket}</dt>
              <dd>
                <span className="block text-2xl font-extrabold text-chalk">{nilai}</span>
                <span className="cue mt-2.5 block text-dust">{ket}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
