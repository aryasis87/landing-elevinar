'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserIcon, 
  MailIcon, 
  PhoneIcon, 
  BookOpenIcon,
  CheckCircle2Icon 
} from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    interests: []
  });

  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    "Teknologi Digital",
    "Kewirausahaan",
    "Pendidikan Inovatif",
    "Kreativitas Anak",
    "Startup",
    "Pengembangan Skill"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi submit (ganti dengan logic aktual)
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-stage-2 flex items-center justify-center p-4"
      >
        <div className="bg-stage-2 rounded-2xl shadow-xl p-12 text-center max-w-md w-full">
          <CheckCircle2Icon className="w-24 h-24 text-spot mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-spot mb-4">
            Pendaftaran Berhasil!
          </h2>
          <p className="text-spot-soft mb-6">
            Terima kasih telah mendaftar. Kami akan segera mengirimkan 
            detail webinar ke email Anda.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-spot text-chalk py-3 rounded-full 
                       hover:bg-spot transition-colors"
          >
            Kembali ke Formulir
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="bg-stage-2 min-h-screen flex items-center justify-center py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-stage-2 rounded-2xl shadow-xl w-full max-w-2xl p-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-spot mb-4">
            Daftar Webinar
          </h2>
          <p className="text-spot-soft max-w-xl mx-auto">
            Lengkapi formulir di bawah ini untuk bergabung dalam perjalanan 
            transformasi digital Anda
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-spot mb-2">
                Nama Lengkap
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-spot" />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama Anda"
                  className="text-black w-full pl-10 pr-4 py-3 rounded-full 
                             border border-chalk/12 focus:border-spot 
                             focus:ring focus:ring-orange-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-spot mb-2">
                Email
              </label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-spot" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="text-black w-full pl-10 pr-4 py-3 rounded-full 
                             border border-chalk/12 focus:border-spot 
                             focus:ring focus:ring-orange-200"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-spot mb-2">
              Nomor Telepon
            </label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-spot" />
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Nomor telepon aktif"
                className="text-black w-full pl-10 pr-4 py-3 rounded-full 
                           border border-chalk/12 focus:border-spot 
                           focus:ring focus:ring-orange-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-spot mb-2">
              Kategori Peserta
            </label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="text-black w-full px-4 py-3 rounded-full 
                         border border-chalk/12 focus:border-spot 
                         focus:ring focus:ring-orange-200"
            >
              <option value="">Pilih Kategori</option>
              <option value="pelajar">Pelajar</option>
              <option value="mahasiswa">Mahasiswa</option>
              <option value="profesional">Profesional</option>
              <option value="wirausaha">Wirausaha</option>
            </select>
          </div>

          <div>
            <label className="block text-spot mb-2">
              Minat Bidang
            </label>
            <div className="flex flex-wrap gap-3">
              {interestOptions.map((interest) => (
                <button
                  type="button"
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-4 py-2 rounded-full text-sm transition-all 
                              ${formData.interests.includes(interest)
                                ? 'bg-spot text-stage'
                                : 'bg-spot/12 text-spot'}`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-spot text-chalk py-3 rounded-full 
                       hover:bg-spot transition-all duration-300"
          >
            Daftar Sekarang
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Registration;