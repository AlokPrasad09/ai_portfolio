import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Add form submission logic here (e.g., send to email service or API)
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-center text-text">Let’s Build Something Together</h2>
      <motion.div
        className="bg-card p-10 rounded-3xl shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-background px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-background px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-gray-200 bg-background px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent h-36"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-sm text-green-600">
                Thanks! Your message has been received. I’ll get back to you soon.
              </p>
            )}
          </form>

          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text">Connect with me</h3>
              <p className="text-text/70 mt-2">Reach out via email or social to start a project or collaboration.</p>
            </div>

            <SocialLinks />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
