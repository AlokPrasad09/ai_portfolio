import React from 'react';
import { motion } from 'framer-motion';
import { getAllCertificates } from '../lib/contentLoader';

const CertificatesSection = () => {
  const certificates = getAllCertificates();

  if (!certificates.length) {
    return null;
  }

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="certificates">
      <h2 className="text-3xl font-bold mb-8 text-center text-text">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.name}
            className="bg-card rounded-3xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 14px 30px rgba(0, 0, 0, 0.12)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={cert.image}
                alt={`${cert.name} certificate`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-text">{cert.name}</h3>
              <p className="text-text/70">
                {cert.issuer}
                {cert.year ? ` • ${cert.year}` : ''}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
